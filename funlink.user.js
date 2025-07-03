// ==UserScript==
// @name         Funlink.io Bypass - Enhanced
// @namespace    https://github.com/PhatNotTaken/
// @version      2.0.0
// @description  Tự động bypass funlink.io với giao diện đẹp và tối ưu
// @author       PhatNotTaken
// @match        https://funlink.io/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Inject enhanced CSS styles
    GM_addStyle(`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * {
            box-sizing: border-box;
        }

        #bypass-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg,
                #667eea 0%,
                #764ba2 20%,
                #f093fb 40%,
                #f5576c 60%,
                #4facfe 80%,
                #00f2fe 100%);
            background-size: 400% 400%;
            animation: gradientMove 20s ease infinite;
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 20px;
            overflow: hidden;
        }

        /* Floating particles in background */
        #bypass-overlay::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image:
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 100px 100px, 150px 150px, 80px 80px, 120px 120px;
            animation: particleFloat 30s linear infinite;
        }

        @keyframes particleFloat {
            0% { background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%; }
            100% { background-position: 100% 100%, -100% 100%, 100% -100%, -100% -100%; }
        }

        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        #bypass-container {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 24px;
            padding: 40px 32px 20px;
            box-shadow:
                0 32px 64px rgba(0, 0, 0, 0.15),
                0 16px 32px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                inset 0 -1px 0 rgba(255, 255, 255, 0.1);
            text-align: center;
            max-width: 440px;
            width: 100%;
            animation: slideInScale 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            overflow: hidden;
        }

        /* Glassmorphism effect enhancement */
        #bypass-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg,
                rgba(255, 255, 255, 0.8) 0%,
                rgba(255, 255, 255, 0.4) 25%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(255, 255, 255, 0.4) 75%,
                rgba(255, 255, 255, 0.8) 100%);
            background-size: 200% 100%;
            animation: shimmerTop 3s ease-in-out infinite;
        }

        #bypass-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            pointer-events: none;
        }

        @keyframes shimmerTop {
            0%, 100% { background-position: -200% 0; opacity: 0.5; }
            50% { background-position: 200% 0; opacity: 1; }
        }

        @keyframes slideInScale {
            from {
                transform: translateY(80px) scale(0.9);
                opacity: 0;
            }
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        #bypass-title {
            background: linear-gradient(135deg,
                #ffffff 0%,
                #f0f9ff 50%,
                #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: clamp(24px, 5vw, 28px);
            font-weight: 800;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            letter-spacing: -0.02em;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        #bypass-subtitle {
            color: rgba(255, 255, 255, 0.7);
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 32px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        #bypass-status {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 24px;
            min-height: 24px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        #bypass-progress {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 24px;
            position: relative;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        #bypass-progress-bar {
            height: 100%;
            background: linear-gradient(90deg,
                #60a5fa 0%,
                #34d399 25%,
                #fbbf24 50%,
                #f87171 75%,
                #a78bfa 100%);
            background-size: 300% 100%;
            border-radius: 12px;
            transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            width: 0%;
            animation: progressFlow 2s linear infinite;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        @keyframes progressFlow {
            0% { background-position: -300% 0; }
            100% { background-position: 300% 0; }
        }

        #bypass-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top: 3px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
            position: relative;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        #bypass-spinner::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top: 3px solid rgba(255, 255, 255, 0.4);
            animation: spin 1.5s linear infinite reverse;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        #bypass-countdown {
            font-size: 32px;
            font-weight: 800;
            color: rgba(255, 255, 255, 0.95);
            margin: 16px 0;
            animation: countdownPulse 1s ease-in-out infinite;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        @keyframes countdownPulse {
            0%, 100% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.1); filter: brightness(1.2); }
        }

        #bypass-error {
            color: #fef2f2;
            background: rgba(239, 68, 68, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 16px;
            padding: 20px;
            margin-top: 24px;
            display: none;
            font-weight: 500;
            animation: errorShake 0.5s ease-in-out;
        }

        @keyframes errorShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        #bypass-success {
            color: #f0fdf4;
            background: rgba(34, 197, 94, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(34, 197, 94, 0.3);
            border-radius: 16px;
            padding: 20px;
            margin-top: 24px;
            display: none;
            font-weight: 500;
            animation: successBounce 0.6s ease-out;
        }

        @keyframes successBounce {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }

        #bypass-link {
            color: #93c5fd;
            text-decoration: none;
            word-break: break-all;
            font-weight: 600;
            transition: all 0.3s ease;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        #bypass-link:hover {
            color: #dbeafe;
            text-decoration: underline;
            text-shadow: 0 0 10px rgba(147, 197, 253, 0.5);
        }

        .icon {
            font-size: 24px;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        #bypass-footer {
            position: absolute;
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg,
                #60a5fa 0%,
                #a78bfa 25%,
                #f472b6 50%,
                #fb7185 75%,
                #fbbf24 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            animation: footerGradient 3s ease-in-out infinite;
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }

        @keyframes footerGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        #bypass-footer::before {
            content: '💫';
            margin-right: 6px;
            background: linear-gradient(135deg,
                #fbbf24 0%,
                #f472b6 50%,
                #60a5fa 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: footerGradient 3s ease-in-out infinite reverse;
        }

        /* Responsive design */
        @media (max-width: 640px) {
            #bypass-overlay {
                padding: 16px;
            }

            #bypass-container {
                padding: 32px 24px 16px;
                border-radius: 20px;
                max-width: 100%;
            }

            #bypass-title {
                font-size: 22px;
                gap: 8px;
            }

            #bypass-status {
                font-size: 14px;
            }

            #bypass-countdown {
                font-size: 28px;
            }

            #bypass-progress {
                height: 6px;
            }

            #bypass-spinner {
                width: 32px;
                height: 32px;
            }
        }

        @media (max-width: 480px) {
            #bypass-container {
                padding: 28px 20px 14px;
                border-radius: 16px;
            }

            #bypass-title {
                font-size: 20px;
            }

            #bypass-countdown {
                font-size: 24px;
            }

            #bypass-footer {
                font-size: 10px;
                font-weight: 600;
            }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
            #bypass-container {
                background: rgba(0, 0, 0, 0.8);
                border: 2px solid rgba(255, 255, 255, 0.8);
            }

            #bypass-title {
                color: white;
                -webkit-text-fill-color: white;
            }

            #bypass-status {
                color: white;
            }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            #bypass-overlay {
                animation: none;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }

            #bypass-container {
                animation: none;
            }

            #bypass-progress-bar {
                animation: none;
            }

            #bypass-spinner {
                animation: spin 2s linear infinite;
            }

            #bypass-countdown {
                animation: none;
            }
        }
    `);

    // Utility functions
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function updateProgress(percentage) {
        const progressBar = document.getElementById('bypass-progress-bar');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    }

    function updateStatus(message) {
        const statusElement = document.getElementById('bypass-status');
        if (statusElement) {
            statusElement.textContent = message;
        }
    }

    function showError(message) {
        const errorElement = document.getElementById('bypass-error');
        const spinner = document.getElementById('bypass-spinner');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            if (spinner) spinner.style.display = 'none';
        }
    }

    function showSuccess(message, url) {
        const successElement = document.getElementById('bypass-success');
        const linkElement = document.getElementById('bypass-link');
        const spinner = document.getElementById('bypass-spinner');

        if (successElement && linkElement) {
            successElement.innerHTML = `
                <div style="margin-bottom: 12px; font-size: 18px;">🎉 ${message}</div>
                <a id="bypass-link" href="${url}" target="_blank" style="
                    color: #93c5fd;
                    text-decoration: none;
                    word-break: break-all;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                ">${url}</a>
            `;
            successElement.style.display = 'block';
            if (spinner) spinner.style.display = 'none';
        }
    }

    // Main bypass function
    async function bypassFunlink() {
        const currentUrl = window.location.href;

        try {
            updateStatus('Đang khởi tạo bypass...');
            updateProgress(10);

            const rod = Math.floor(Math.random() * 900000) + 100000;
            const rad = rod.toString();

            const urlMatch = currentUrl.match(/funlink\.io\/(\S+)/);

            if (!urlMatch) {
                throw new Error('URL không hợp lệ hoặc không phải funlink.io');
            }

            const id = urlMatch[1];
            updateStatus('Đang lấy thông tin keyword...');
            updateProgress(25);

            // Step 1: Get keyword
            const keywordResponse = await new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: `https://public.funlink.io/api/code/renew-key?ignoreId=${rad}&id=${id}`,
                    headers: {
                        'accept': '*/*',
                        'accept-language': 'en-US,en;q=0.9',
                        'origin': 'https://funlink.io',
                        'priority': 'u=1, i',
                        'referer': 'https://funlink.io/',
                        'rid': rad,
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-site',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                    },
                    onload: function(response) {
                        if (response.status === 200) {
                            resolve(JSON.parse(response.responseText));
                        } else {
                            reject(new Error(`Lỗi lấy keyword: ${response.status}`));
                        }
                    },
                    onerror: function(error) {
                        reject(new Error('Lỗi kết nối khi lấy keyword'));
                    }
                });
            });

            const keywordText = keywordResponse.data_keyword.keyword_text;
            const keywordId = keywordResponse.data_keyword.id;
            const urlDestination = keywordResponse.data_keyword.url_destination;

            updateStatus('Đang chuẩn bị bypass...');
            updateProgress(40);

            const parsedUrl = new URL(urlDestination);
            const origin = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

            // Step 2: OPTIONS request
            await new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: 'OPTIONS',
                    url: 'https://public.funlink.io/api/code/ch',
                    headers: {
                        'accept': '*/*',
                        'accept-language': 'en-US,en;q=0.9',
                        'cache-control': 'max-age=0',
                        'origin': origin,
                        'priority': 'u=1, i',
                        'referer': `${origin}/`,
                        'rid': rad,
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                    },
                    onload: function(response) {
                        if (response.status === 200) {
                            resolve();
                        } else {
                            reject(new Error(`Lỗi bước OPTIONS: ${response.status}`));
                        }
                    },
                    onerror: function(error) {
                        reject(new Error('Lỗi kết nối OPTIONS'));
                    }
                });
            });

            // Step 3: Wait 45 seconds with countdown
            updateStatus('Đang chờ để bypass... ⏱️');
            updateProgress(50);

            for (let i = 45; i >= 0; i--) {
                const countdownElement = document.getElementById('bypass-countdown');
                if (countdownElement) {
                    countdownElement.textContent = `${i}s`;
                }
                await sleep(1000);
                updateProgress(50 + (45 - i) * 0.6);
            }

            updateStatus('Đang lấy verification code...');
            updateProgress(75);

            // Step 4: Get verification code
            const codeResponse = await new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: 'POST',
                    url: 'https://public.funlink.io/api/code/code',
                    headers: {
                        'accept': '*/*',
                        'accept-language': 'en-US,en;q=0.9',
                        'cache-control': 'max-age=0',
                        'content-type': 'application/json',
                        'origin': origin,
                        'priority': 'u=1, i',
                        'referer': `${origin}/`,
                        'rid': rad,
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                    },
                    data: JSON.stringify({
                        'screen': '1920 x 1080',
                        'browser_name': 'Chrome',
                        'browser_version': '138.0.0.0',
                        'browser_major_version': '138',
                        'is_mobile': false,
                        'os_name': 'Windows',
                        'os_version': '10',
                        'is_cookies': true,
                        'href': urlDestination,
                        'user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                        'hostname': origin,
                    }),
                    onload: function(response) {
                        if (response.status === 200) {
                            resolve(JSON.parse(response.responseText));
                        } else {
                            reject(new Error(`Lỗi lấy code: ${response.status}`));
                        }
                    },
                    onerror: function(error) {
                        reject(new Error('Lỗi kết nối khi lấy code'));
                    }
                });
            });

            if (!codeResponse.success || !codeResponse.code) {
                throw new Error('Không thể lấy verification code');
            }

            updateStatus('Đang bypass link cuối cùng...');
            updateProgress(90);

            // Step 5: Final request to get the bypassed URL
            const finalResponse = await new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: 'POST',
                    url: 'https://public.funlink.io/api/url/tracking-url',
                    headers: {
                        'accept': 'application/json',
                        'accept-language': 'en-US,en;q=0.9',
                        'content-type': 'application/json',
                        'origin': 'https://funlink.io',
                        'priority': 'u=1, i',
                        'referer': 'https://funlink.io/',
                        'rid': rad,
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                    },
                    data: JSON.stringify({
                        'browser_name': 'Chrome',
                        'browser_version': '138.0.0.0',
                        'os_name': 'Windows',
                        'os_version': '10',
                        'os_version_name': '10',
                        'keyword_answer': codeResponse.code,
                        'link_shorten_id': id,
                        'keyword': keywordText,
                        'ip': '',
                        'user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                        'device_name': 'desktop',
                        'token': '',
                        'keyword_id': keywordId,
                    }),
                    onload: function(response) {
                        if (response.status === 200) {
                            resolve(JSON.parse(response.responseText));
                        } else {
                            reject(new Error(`Lỗi request cuối cùng: ${response.status}`));
                        }
                    },
                    onerror: function(error) {
                        reject(new Error('Lỗi kết nối cuối cùng'));
                    }
                });
            });

            if (finalResponse.err) {
                throw new Error(`Lỗi từ API: ${finalResponse.err}`);
            }

            if (finalResponse.result && finalResponse.data_link && finalResponse.data_link.url) {
                updateStatus('Bypass thành công! 🎉');
                updateProgress(100);

                const finalUrl = finalResponse.data_link.url;
                showSuccess('Link đã được bypass thành công!', finalUrl);

                // Auto redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = finalUrl;
                }, 3000);
            } else {
                throw new Error('Không thể lấy link cuối cùng');
            }

        } catch (error) {
            console.error('Bypass error:', error);
            updateStatus('Có lỗi xảy ra 😞');
            showError(`Lỗi: ${error.message}`);
        }
    }

    // Create and show bypass interface
    function createBypassInterface() {
        const overlay = document.createElement('div');
        overlay.id = 'bypass-overlay';

        overlay.innerHTML = `
            <div id="bypass-container">
                <div id="bypass-title">
                    <span class="icon">🚀</span>
                    Funlink Bypass
                </div>
                <div id="bypass-subtitle">Enhanced Edition</div>
                <div id="bypass-status">Đang khởi tạo...</div>
                <div id="bypass-progress">
                    <div id="bypass-progress-bar"></div>
                </div>
                <div id="bypass-spinner"></div>
                <div id="bypass-countdown"></div>
                <div id="bypass-error"></div>
                <div id="bypass-success"></div>
                <div id="bypass-footer">Made By PhatNotTaken</div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Start bypass process
        setTimeout(bypassFunlink, 1000);
    }

    // Initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBypassInterface);
    } else {
        createBypassInterface();
    }

})();