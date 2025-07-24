#!/bin/bash

# Minecraft Cross-Platform Server Setup Script
# Supports both Java Edition (PC) and Bedrock Edition (PE/Mobile)

echo "=== Minecraft Cross-Platform Server Setup ==="
echo "This script will install a Minecraft server that supports both PC and Mobile players"
echo ""

# Cập nhật hệ thống
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Cài đặt Java 21
echo "☕ Installing Java 21..."
sudo apt install openjdk-21-jdk wget curl screen -y

# Kiểm tra Java version
java -version

# Tạo thư mục server
echo "📁 Creating server directory..."
mkdir -p ~/minecraft-server
cd ~/minecraft-server

# Tải Paper Server (phiên bản 1.21.8)
echo "📥 Downloading Paper Server 1.21.8..."
wget "https://fill-data.papermc.io/v1/objects/9457d1279efcc2094e818cacb2f17670d9479e5f6b4ea2517eb93a6a3face51f/paper-1.21.8-11.jar" -O paper.jar

echo "✅ Downloaded Paper Server v1.21.8 build 11"

# Chạy server lần đầu để tạo files
echo "🚀 Running server first time to generate files..."
timeout 30s java -Xmx1G -Xms1G -jar paper.jar --nogui || true

# Chấp nhận EULA
echo "📜 Accepting EULA..."
echo "eula=true" > eula.txt

# Tạo thư mục plugins
echo "📂 Creating plugins directory..."
mkdir -p plugins

# Tải GeyserMC và Floodgate
echo "🌉 Downloading GeyserMC (Cross-platform bridge)..."
cd plugins

# Tải Geyser-Spigot (latest version)
echo "📥 Downloading Geyser-Spigot..."
wget "https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot" -O Geyser-Spigot.jar

# Tải Floodgate-Spigot (latest version)
echo "📥 Downloading Floodgate-Spigot..."
wget "https://download.geysermc.org/v2/projects/floodgate/versions/latest/builds/latest/downloads/spigot" -O floodgate-spigot.jar

echo "✅ Downloaded GeyserMC and Floodgate plugins"

cd ..

# Cấu hình server.properties
echo "⚙️ Configuring server.properties..."
cat > server.properties << EOF
#Minecraft server properties
server-port=25565
query.port=25565
enable-query=true
gamemode=survival
difficulty=easy
max-players=20
online-mode=true
white-list=false
spawn-protection=16
motd=Cross-Platform Minecraft Server - PC & Mobile Welcome!
server-name=CrossPlatform Server
allow-flight=false
enable-command-block=false
spawn-monsters=true
spawn-animals=true
spawn-npcs=true
pvp=true
level-name=world
level-seed=
level-type=minecraft\:normal
view-distance=10
simulation-distance=10
EOF

# Chạy server để tạo cấu hình GeyserMC
echo "🔧 Starting server to generate plugin configs..."
timeout 60s java -Xmx2G -Xms1G -jar paper.jar --nogui || true

# Cấu hình GeyserMC
echo "🌐 Configuring GeyserMC for cross-platform play..."
if [ -f "plugins/Geyser-Spigot/config.yml" ]; then
    # Backup original config
    cp plugins/Geyser-Spigot/config.yml plugins/Geyser-Spigot/config.yml.backup
    
    # Cấu hình Geyser
    cat > plugins/Geyser-Spigot/config.yml << 'EOF'
bedrock:
  address: 0.0.0.0
  port: 19132
  clone-remote-port: false
  motd1: "CrossPlatform Server"
  motd2: "PC & Mobile Players Welcome!"

remote:
  address: 127.0.0.1
  port: 25565
  auth-type: floodgate

floodgate-key-file: key.pem
saved-user-logins:
- ThisExampleUsernameShouldBeLongEnoughToNeverBeAnActualUsername
- ThisOtherExampleUsernameShouldAlsoBeLongEnoughToNeverBeAnActualUsername

command-suggestions: true
passthrough-motd: false
passthrough-protocol-name: false
passthrough-player-counts: false
legacy-ping-passthrough: false
ping-passthrough-interval: 3
forward-player-ping: false
max-players: 100
debug-mode: false
allow-color-codes-in-motd: true
metrics:
  enabled: true
  uuid: generateduuid
EOF
fi

# Tạo script khởi động
echo "📝 Creating startup script..."
cat > start-server.sh << 'EOF'
#!/bin/bash

SERVER_DIR="$(dirname "$0")"
cd "$SERVER_DIR"

JAVA_OPTS="-Xmx4G -Xms2G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1"

echo "======================================================"
echo "    🎮 Minecraft Cross-Platform Server Starting"
echo "======================================================"
echo "📱 Mobile/PE players connect to: YOUR_SERVER_IP:19132"
echo "💻 PC/Java players connect to: YOUR_SERVER_IP:25565"
echo "======================================================"
echo ""
echo "Starting server in screen session..."
echo "Use 'screen -r minecraft' to view console"
echo "Use Ctrl+A then D to detach from console"
echo ""

# Start server in screen session
screen -dmS minecraft java $JAVA_OPTS -jar paper.jar --nogui

echo "✅ Server started in background!"
echo "🔍 To view console: screen -r minecraft"
echo "🛑 To stop server: screen -r minecraft, then type 'stop'"
echo ""
echo "📊 Server status:"
sleep 3
if screen -list | grep -q "minecraft"; then
    echo "✅ Server is running!"
else
    echo "❌ Server failed to start. Check logs."
fi
EOF

chmod +x start-server.sh

# Tạo script dừng server
cat > stop-server.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping Minecraft server..."
screen -S minecraft -X stuff "stop$(printf \\r)"
sleep 5
echo "✅ Server stopped!"
EOF

chmod +x stop-server.sh

# Cấu hình firewall
echo "🔥 Configuring firewall..."
sudo ufw allow 25565/tcp comment "Minecraft Java Edition"
sudo ufw allow 19132/udp comment "Minecraft Bedrock Edition"

# Tạo systemd service (optional)
echo "🔧 Creating systemd service..."
sudo tee /etc/systemd/system/minecraft.service > /dev/null << EOF
[Unit]
Description=Minecraft Cross-Platform Server
After=network.target

[Service]
Type=forking
User=$(whoami)
WorkingDirectory=$(pwd)
ExecStart=$(pwd)/start-server.sh
ExecStop=$(pwd)/stop-server.sh
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload

echo ""
echo "🎉 ===== SETUP COMPLETED SUCCESSFULLY! ====="
echo ""
echo "📂 Server location: $(pwd)"
echo ""
echo "🚀 Start server:"
echo "   Method 1: ./start-server.sh"
echo "   Method 2: sudo systemctl start minecraft"
echo ""
echo "🛑 Stop server:"
echo "   Method 1: ./stop-server.sh"
echo "   Method 2: sudo systemctl stop minecraft"
echo ""
echo "📱 Connection Info:"
echo "   📱 Mobile/PE (Bedrock): YOUR_SERVER_IP:19132"
echo "   💻 PC (Java Edition): YOUR_SERVER_IP:25565"
echo ""
echo "🔍 View server console: screen -r minecraft"
echo "📋 Enable auto-start: sudo systemctl enable minecraft"
echo ""
echo "🌐 Your server IP address:"
ip route get 1.1.1.1 | awk '{print $7}' | head -n1
echo ""
echo "⚠️  Remember to:"
echo "   1. Configure port forwarding on your router if hosting from home"
echo "   2. Share the correct IP address with players"
echo "   3. Adjust server.properties for your preferences"
echo ""
echo "Happy gaming! 🎮"
