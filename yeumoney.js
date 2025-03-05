(async function () {
  const _0x559f8b = function () {
    let _0x338ab4 = true;
    return function (_0x8c2d4c, _0x448ec7) {
      const _0x36800f = _0x338ab4 ? function () {
        if (_0x448ec7) {
          const _0x1e5bdc = _0x448ec7.apply(_0x8c2d4c, arguments);
          _0x448ec7 = null;
          return _0x1e5bdc;
        }
      } : function () {};
      _0x338ab4 = false;
      return _0x36800f;
    };
  }();
  const _0x3d8eb9 = function () {
    let _0x389016 = true;
    return function (_0x44fa59, _0x1ad6dd) {
      const _0x3104c5 = _0x389016 ? function () {
        if (_0x1ad6dd) {
          const _0x2397c1 = _0x1ad6dd.apply(_0x44fa59, arguments);
          _0x1ad6dd = null;
          return _0x2397c1;
        }
      } : function () {};
      _0x389016 = false;
      return _0x3104c5;
    };
  }();
  'use strict';
  async function _0x49ba1d() {
    let _0x2a69a1 = localStorage.getItem("deviceID");
    if (!_0x2a69a1) {
      const _0x1df946 = navigator.userAgent;
      const _0x52b96d = navigator.platform;
      const _0x2c4dd4 = navigator.language;
      const _0x5203d8 = _0x1df946 + _0x52b96d + _0x2c4dd4;
      const _0x44ca5b = new TextEncoder();
      const _0x2a1518 = _0x44ca5b.encode(_0x5203d8);
      const _0x54aa9f = await crypto.subtle.digest("SHA-256", _0x2a1518);
      const _0x43ec99 = Array.from(new Uint8Array(_0x54aa9f));
      const _0x129a83 = _0x43ec99.map(_0x3102f7 => _0x3102f7.toString(16).padStart(2, '0')).join('');
      _0x2a69a1 = _0x129a83.substring(0, 16);
      localStorage.setItem("deviceID", _0x2a69a1);
    }
    return _0x2a69a1;
  }
  async function _0x17bcb7() {
    try {
      const _0xd22296 = await fetch("https://api64.ipify.org?format=json", {
        'cache': "no-store"
      });
      if (!_0xd22296.ok) {
        throw new Error("Không thể lấy IP");
      }
      const _0x5f25d9 = await _0xd22296.json();
      return _0x5f25d9.ip;
    } catch (_0x46a06c) {
      console.error("Lỗi lấy IP:", _0x46a06c);
      return "Không xác định";
    }
  }
  function _0x30b266(_0x136a59, _0x1b8da6, _0x20dabf) {
    const _0x5e292d = {
      'username': "Bypasser Notifi By HieuDz",
      'avatar_url': "https://i.pinimg.com/736x/77/c9/0a/77c90a2b0c3a7d4a6a1ae22d5ac4238e.jpg",
      'embeds': [{
        'title': "**Bypass Thành Công**",
        'color': 0x99ff,
        'fields': [{
          'name': "**Thiết Bị**",
          'value': '`' + _0x136a59 + '`',
          'inline': true
        }, {
          'name': "**IP Address**",
          'value': '`' + _0x1b8da6 + '`',
          'inline': true
        }, {
          'name': "**Tổng số lần sử dụng**",
          'value': '`' + _0x20dabf + '`',
          'inline': false
        }],
        'footer': {
          'text': "Bypasser System",
          'icon_url': "https://i.pinimg.com/736x/c3/66/df/c366df7cc91f1e3d67fc409db3042a42.jpg"
        },
        'timestamp': new Date().toISOString()
      }]
    };
    fetch("https://discord.com/api/webhooks/1346723677105946664/ls2XnmD1HrUmNuTwh8_-RsHH0fGWrJjBUjaSxAyUsk95WRDbzYlPu62ap22fWbU54DBX", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify(_0x5e292d)
    })["catch"](_0x44ed21 => console.error("Lỗi gửi Webhook:", _0x44ed21));
  }
  (async function () {
    const _0x1484ce = _0x559f8b(this, function () {
      return _0x1484ce.toString().search("(((.+)+)+)+$").toString().constructor(_0x1484ce).search("(((.+)+)+)+$");
    });
    _0x1484ce();
    const _0x2d35ff = _0x3d8eb9(this, function () {
      let _0x373e66;
      try {
        const _0x4cc9fc = Function("return (function() {}.constructor(\"return this\")( ));");
        _0x373e66 = _0x4cc9fc();
      } catch (_0x39378e) {
        _0x373e66 = window;
      }
      const _0x1fa8f3 = _0x373e66.console = _0x373e66.console || {};
      const _0x15fba2 = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let _0x4d1c71 = 0; _0x4d1c71 < _0x15fba2.length; _0x4d1c71++) {
        const _0x54d207 = _0x3d8eb9.constructor.prototype.bind(_0x3d8eb9);
        const _0x31aff0 = _0x15fba2[_0x4d1c71];
        const _0x2e4cca = _0x1fa8f3[_0x31aff0] || _0x54d207;
        _0x54d207.__proto__ = _0x3d8eb9.bind(_0x3d8eb9);
        _0x54d207.toString = _0x2e4cca.toString.bind(_0x2e4cca);
        _0x1fa8f3[_0x31aff0] = _0x54d207;
      }
    });
    _0x2d35ff();
    const _0x1944a0 = await _0x17bcb7();
    const _0x50d984 = await _0x49ba1d();
    let _0x3213ae = JSON.parse(localStorage.getItem("deviceUsage")) || {};
    const _0xcecc76 = _0x50d984 + '-' + _0x1944a0;
    const _0x5b36d0 = (_0x3213ae[_0xcecc76] || 0) + 1;
    _0x3213ae[_0xcecc76] = _0x5b36d0;
    localStorage.setItem("deviceUsage", JSON.stringify(_0x3213ae));
    _0x30b266(_0x50d984, _0x1944a0, _0x5b36d0);
  })();
  function _0xcee09a() {
    console.log("Đang đổi nhiệm vụ...");
    const _0x322636 = document.querySelector("#btn-baoloi");
    if (!_0x322636) {
      return;
    }
    _0x322636.click();
    setTimeout(() => {
      const _0x17498a = document.querySelector("#lydo_doima > center > a:nth-child(2)");
      if (_0x17498a) {
        _0x17498a.click();
      }
      setTimeout(() => {
        const _0x15b301 = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
        if (_0x15b301) {
          _0x15b301.click();
        }
        setTimeout(() => {
          const _0x37e291 = document.querySelector("#dongy_doima > a");
          if (_0x37e291) {
            _0x37e291.click();
          }
        }, 500);
      }, 500);
    }, 500);
  }
  function _0x2f35f2() {
    return new Promise((_0x1b9d35, _0x18b317) => {
      const _0x5f2cde = document.querySelector("p#TK1").textContent.trim().toLowerCase();
      const _0x34f3b8 = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv");
      const _0x15de97 = _0x34f3b8 ? _0x34f3b8.src : null;
      if (_0x15de97.includes("placehold.co")) {
        setTimeout(() => _0x2f35f2().then(_0x1b9d35)["catch"](_0x18b317), 100);
        return;
      }
      const _0x476107 = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2&url=" + _0x15de97;
      const _0x548b41 = new XMLHttpRequest();
      _0x548b41.open("GET", _0x476107, true);
      _0x548b41.onload = function () {
        if (_0x548b41.status === 200) {
          const _0x3e59ad = JSON.parse(_0x548b41.responseText);
          const _0x173226 = _0x3e59ad.ParsedResults[0];
          const _0x162cd9 = _0x173226.TextOverlay.Lines.filter(_0x181b27 => _0x181b27.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x181b27.Words && _0x181b27.Words.some(_0x256bb6 => _0x256bb6.Top < 170)).map(_0x624bf0 => _0x624bf0.LineText);
          let _0x165aed = '';
          if (_0x5f2cde === "188bet") {
            _0x165aed = "https://165.22.63.250" + _0x162cd9 + '/';
          } else {
            if (_0x5f2cde === "w88") {
              _0x165aed = "https://188.166.185.213/";
            } else {
              if (_0x5f2cde === "bk8") {
                _0x165aed = "https://188.166.189.40/";
              } else {
                if (_0x5f2cde === "fb88") {
                  _0x165aed = "https://fb88" + _0x162cd9 + '/';
                } else {
                  if (_0x5f2cde === "m88") {
                    _0x165aed = "https://bet88" + _0x162cd9 + '/';
                  } else {
                    if (_0x5f2cde === "vn88") {
                      _0x165aed = "https://139.59.238.116/";
                    } else {
                      if (_0x5f2cde === "v9bet") {
                        _0x165aed = "https://v9bet" + _0x162cd9 + '/';
                      } else {
                        _0x165aed = "Chưa nhận diện được URL!";
                      }
                    }
                  }
                }
              }
            }
          }
          _0x1b9d35(_0x165aed);
        } else {
          _0x18b317("Lỗi khi tải dữ liệu: " + _0x548b41.status);
        }
      };
      _0x548b41.send();
    });
  }
  function _0x596eb9(_0x1759d4) {
    const _0x32f3e5 = Date.now();
    return _0x32f3e5 + ',' + "https://www.google.com/" + ',' + _0x1759d4 + ",IOS900,hidden,null";
  }
  const _0x3fbe0c = [{
    'ip': "103.1.2.3",
    'port': 0x1f90
  }, {
    'ip': "45.67.89.12",
    'port': 0xc38
  }, {
    'ip': "192.168.1.100",
    'port': 0x50
  }, {
    'ip': "78.90.12.34",
    'port': 0x1bb
  }];
  const _0x5ce3fe = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"];
  let _0x5f054e = GM_getValue("isFakeIPEnabled", false);
  let _0x2aebed = GM_getValue("isFakeBrowserEnabled", false);
  let _0xec9955 = GM_getValue("currentProxy", null);
  let _0x30ecf0 = GM_getValue("currentUserAgent", navigator.userAgent);
  if (_0x5f054e && _0xec9955) {
    _0x5ec37a(_0xec9955);
  }
  if (_0x2aebed && _0x30ecf0 !== navigator.userAgent) {
    _0xd69aa7(_0x30ecf0);
  }
  function _0x36be05() {
    const _0x377871 = Math.floor(Math.random() * _0x3fbe0c.length);
    return _0x3fbe0c[_0x377871];
  }
  function _0x2327e4() {
    const _0x1efe99 = Math.floor(Math.random() * _0x5ce3fe.length);
    return _0x5ce3fe[_0x1efe99];
  }
  function _0x5ec37a(_0x1f70e6) {
    console.log("Đã bật Fake IP: " + _0x1f70e6.ip + ':' + _0x1f70e6.port);
    _0xec9955 = _0x1f70e6;
    GM_setValue("currentProxy", _0x1f70e6);
    GM_setValue("isFakeIPEnabled", true);
  }
  function _0x5e6c9a() {
    console.log("Đã tắt Fake IP");
    _0xec9955 = null;
    GM_setValue("currentProxy", null);
    GM_setValue("isFakeIPEnabled", false);
  }
  function _0xd69aa7(_0x4ba645) {
    console.log("Đã bật Fake Browser: " + _0x4ba645);
    Object.defineProperty(navigator, "userAgent", {
      'value': _0x4ba645,
      'writable': false,
      'configurable': true
    });
    Object.defineProperty(navigator, "platform", {
      'value': _0x4ba645.includes("Windows") ? "Win32" : _0x4ba645.includes("Mac") ? "MacIntel" : "Linux x86_64",
      'writable': false,
      'configurable': true
    });
    _0x30ecf0 = _0x4ba645;
    GM_setValue("currentUserAgent", _0x4ba645);
    GM_setValue("isFakeBrowserEnabled", true);
  }
  function _0x50de81() {
    console.log("Đã tắt Fake Browser");
    Object.defineProperty(navigator, "userAgent", {
      'value': navigator.userAgent,
      'writable': false,
      'configurable': true
    });
    Object.defineProperty(navigator, "platform", {
      'value': navigator.platform,
      'writable': false,
      'configurable': true
    });
    _0x30ecf0 = navigator.userAgent;
    GM_setValue("currentUserAgent", navigator.userAgent);
    GM_setValue("isFakeBrowserEnabled", false);
  }
  function _0x5dcfca(_0x529607) {
    return new Promise((_0x3642a5, _0x2a18b9) => {
      const _0x3d4414 = _0x596eb9();
      const _0x4a31d5 = new XMLHttpRequest();
      const _0x57a22d = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x3d4414 + "&clk=" + _0x529607;
      _0x4a31d5.open("POST", _0x57a22d, true);
      _0x4a31d5.onload = function () {
        if (_0x4a31d5.status === 200) {
          const _0x2447e0 = _0x4a31d5.responseText;
          const _0x2dfeae = _0x2447e0.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
          if (_0x2dfeae) {
            localStorage.codexn = _0x2dfeae;
            _0x3642a5(_0x2dfeae);
          } else {
            console.error("Không thể lấy mã codexn");
            _0x2a18b9("Lỗi! Đổi nhiệm vụ khác và thử lại");
          }
        } else {
          _0x2a18b9("Lỗi: " + _0x4a31d5.status);
        }
      };
      _0x4a31d5.onerror = () => _0x2a18b9("Lỗi mạng hoặc yêu cầu không thành công");
      _0x4a31d5.send();
    });
  }
  function _0x5c2e49(_0x1a12ca, _0x5f2f24, _0x2a03d0, _0x4440f0) {
    return new Promise((_0x20a0fc, _0x2efffe) => {
      const _0x117821 = "https://traffic-user.net/GET_MA.php?codexn=" + _0x1a12ca + "&url=" + _0x5f2f24 + "&loai_traffic=" + _0x2a03d0 + "&clk=" + _0x4440f0;
      const _0x2b2047 = new XMLHttpRequest();
      _0x2b2047.open("POST", _0x117821, true);
      _0x2b2047.onload = function () {
        if (_0x2b2047.status === 200) {
          const _0x4631f0 = _0x2b2047.responseText;
          const _0x27fa1e = _0x4631f0.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
          if (_0x27fa1e) {
            sessionStorage.setItem("ymnclk", _0x27fa1e);
            _0x20a0fc(_0x27fa1e);
          } else {
            const _0x12abc1 = new DOMParser().parseFromString(_0x4631f0, "text/html");
            const _0x154a51 = _0x12abc1.querySelector("span#layma_me_vuatraffic");
            if (_0x154a51) {
              _0x20a0fc(_0x154a51.textContent.trim());
            } else {
              _0x2efffe("URL Lỗi! Vui lòng kiểm tra lại.");
            }
          }
        } else {
          _0x2efffe("Lỗi: " + _0x2b2047.status);
        }
      };
      _0x2b2047.onerror = () => _0x2efffe("Lỗi mạng hoặc yêu cầu không thành công");
      _0x2b2047.send();
    });
  }
  function _0x375b14(_0x5cf724) {
    const _0x690834 = document.querySelector("#gt-form")?.["getAttribute"]("action") || '';
    const _0x2f11bb = "https://yeumoney.com" + _0x690834;
    const _0x3068e2 = new FormData();
    _0x3068e2.append("code", _0x5cf724);
    _0x3068e2.append("keyword", '');
    _0x3068e2.append("dieuhanh", document.querySelector("input[name=\"dieuhanh\"]")?.["value"] || '');
    _0x3068e2.append("pix", document.querySelector("input[name=\"pix\"]")?.["value"] || '');
    _0x3068e2.append("lvp", document.querySelector("input[name=\"lvp\"]")?.["value"] || '');
    _0x3068e2.append("ref", "$ref");
    _0x3068e2.append("trinhduyet", document.getElementById("trinhduyet")?.["value"] || '');
    _0x3068e2.append("id_traffic", document.getElementById("id_donhang")?.["value"] || '');
    _0x3068e2.append("check_index", '1');
    const _0x461e2f = new URLSearchParams(_0x3068e2).toString();
    const _0x30c83e = {
      'method': "POST",
      'url': _0x2f11bb,
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'User-Agent': _0x2aebed ? _0x30ecf0 : navigator.userAgent,
        'Referer': "https://yeumoney.com/",
        'Cookie': document.cookie
      },
      'data': _0x461e2f,
      'onload': function (_0x13e189) {
        window.location.href = _0x13e189.finalUrl;
      },
      'onerror': function (_0x46560d) {
        const _0x15117c = _0x46560d.error;
        const _0x2618ec = _0x15117c.match(/https?:\/\/[^\s"]+/);
        window.location.href = _0x2618ec;
      }
    };
    if (_0x5f054e && _0xec9955) {
      _0x30c83e.proxy = {
        'host': _0xec9955.ip,
        'port': _0xec9955.port
      };
    }
    GM_xmlhttpRequest(_0x30c83e);
  }
  async function _0x29c520(_0x46a0fd) {
    try {
      const _0x5da3b0 = await _0x5dcfca(null);
      const _0x314d5a = _0x46a0fd.replace(/\/$/, '');
      const _0x3cc082 = await _0x5c2e49(_0x5da3b0, _0x314d5a, "https://www.google.com/", null);
      const _0x147b45 = await _0x5dcfca(_0x3cc082);
      const _0x489c3d = _0x46a0fd + "admin";
      const _0x272944 = await _0x5c2e49(_0x147b45, _0x489c3d, _0x46a0fd, _0x3cc082);
      return _0x272944;
    } catch (_0x27c214) {
      console.error("Lỗi trong startBypass:", _0x27c214);
      return null;
    }
  }
  async function _0x392ddd() {
    try {
      const _0x276a2e = new Date();
      const _0x57ad79 = _0x276a2e.getDate().toString();
      const _0x7c7e49 = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text");
      const _0x502d31 = _0x7c7e49.textContent || _0x7c7e49.innerText;
      if (!_0x502d31.includes("TÌM MÃ BƯỚC 2")) {
        const _0x40ed2f = localStorage.getItem("dayBypassed");
        if (_0x40ed2f === _0x57ad79) {
          console.log("Đã bypass hôm nay.");
          return null;
        }
        if (_0x502d31.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
          const _0x5ef1a5 = confirm("Bạn có muốn Bypass không?!");
          if (!_0x5ef1a5) {
            localStorage.setItem("dayBypassed", _0x57ad79);
            return null;
          }
        } else {
          return null;
        }
      }
      localStorage.setItem("dayBypassed", _0x57ad79);
      const _0x299fe9 = window.location.href;
      const _0x16a156 = _0x299fe9.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (!_0x16a156) {
        console.error("Không tìm thấy Sheet ID.");
        return null;
      }
      const _0x229f26 = "https://sheets.googleapis.com/v4/spreadsheets/" + _0x16a156 + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
      const _0x45fdfb = await fetch(_0x229f26);
      if (!_0x45fdfb.ok) {
        console.error("Lỗi khi gọi API:", _0x45fdfb.statusText);
        return null;
      }
      const _0x5dd599 = await _0x45fdfb.json();
      const _0xd48374 = _0x5dd599.sheets?.[0]?.["data"]?.[0]?.["rowData"] || [];
      for (let _0x2700bb of _0xd48374) {
        for (let _0x5ace8d of _0x2700bb.values || []) {
          const _0x78c32e = _0x5ace8d.hyperlink;
          if (_0x78c32e && _0x78c32e.includes("https://yeumoney.com/")) {
            return _0x78c32e;
          }
        }
      }
      console.warn("Không tìm thấy hyperlink hợp lệ.");
      return null;
    } catch (_0x17e6e9) {
      console.error("Lỗi:", _0x17e6e9.message);
      return null;
    }
  }
  async function _0xa553b2() {
    if (!document.title.includes("Điểm danh ngày")) {
      return null;
    }
    window.onbeforeunload = null;
    function _0x8703b8(_0x2a0280, _0x50fe38) {
      setTimeout(() => {
        if (!_0x2a0280.classList.contains("checked")) {
          _0x2a0280.click();
        }
      }, _0x50fe38);
    }
    function _0x5144b7(_0xc047d0, _0x564b29) {
      setTimeout(() => {
        if (!_0xc047d0.classList.contains("checked")) {
          _0xc047d0.click();
        }
      }, _0x564b29);
    }
    var _0x14cd74 = document.querySelectorAll("div[role=\"checkbox\"]");
    _0x14cd74.forEach((_0x389eee, _0x5e624f) => _0x8703b8(_0x389eee, _0x5e624f * 300));
    var _0x305555 = document.querySelectorAll("div[role=\"radiogroup\"]");
    _0x305555.forEach(_0x6bb59f => {
      var _0x5c57b3 = _0x6bb59f.querySelectorAll("div[role=\"radio\"]");
      _0x5c57b3.forEach((_0x232b2c, _0x1994cc) => _0x5144b7(_0x232b2c, _0x1994cc * 300));
    });
    setTimeout(() => {
      var _0x1fd214 = document.querySelector("form");
      if (_0x1fd214) {
        _0x1fd214.submit();
      }
    }, (_0x14cd74.length + _0x305555.length) * 300 + 200);
  }
  function _0x2c0921(_0x3a7524) {
    const _0x2b9bc8 = document.createElement("div");
    _0x2b9bc8.id = "bypass-panel";
    _0x2b9bc8.style.position = "fixed";
    _0x2b9bc8.style.top = "20px";
    _0x2b9bc8.style.right = "20px";
    _0x2b9bc8.style.background = "linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.98))";
    _0x2b9bc8.style.backdropFilter = "blur(15px)";
    _0x2b9bc8.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    _0x2b9bc8.style.borderRadius = "20px";
    _0x2b9bc8.style.padding = '0';
    _0x2b9bc8.style.zIndex = "9999";
    _0x2b9bc8.style.width = "360px";
    _0x2b9bc8.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 204, 255, 0.1)";
    _0x2b9bc8.style.color = "#ffffff";
    _0x2b9bc8.style.fontFamily = "'Roboto', sans-serif";
    _0x2b9bc8.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    _0x2b9bc8.style.overflow = "hidden";
    const _0x5a621b = document.createElement("link");
    _0x5a621b.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap";
    _0x5a621b.rel = "stylesheet";
    document.head.appendChild(_0x5a621b);
    const _0x4e54e2 = document.createElement("style");
    _0x4e54e2.textContent = "\n        .bypass-header {\n            padding: 14px 18px;\n            background: linear-gradient(135deg, rgba(30, 40, 50, 0.95), rgba(20, 30, 40, 0.95));\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-radius: 20px 20px 0 0;\n        }\n        .bypass-title {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 700;\n            background: linear-gradient(90deg, #00ffcc, #00ccff, #ff00ff);\n            -webkit-background-clip: text;\n            background-clip: text;\n            color: transparent;\n            text-shadow: 0 0 8px rgba(0, 204, 255, 0.2);\n        }\n        .toggle-btn {\n            width: 24px;\n            height: 24px;\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border: none;\n            border-radius: 50%;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .toggle-btn:hover {\n            transform: scale(1.1);\n            box-shadow: 0 4px 10px rgba(0, 204, 255, 0.5);\n        }\n        .toggle-btn.minimized {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n        }\n        .toggle-btn::before {\n            content: '−';\n            color: #fff;\n            font-size: 14px;\n            font-weight: 700;\n        }\n        .toggle-btn.minimized::before {\n            content: '+';\n        }\n        .bypass-content {\n            padding: 18px;\n            opacity: 1;\n            transition: opacity 0.3s ease, max-height 0.5s ease;\n            max-height: 500px;\n        }\n        #bypass-panel.minimized .bypass-content {\n            max-height: 0;\n            padding: 0 18px;\n            opacity: 0;\n            overflow: hidden;\n        }\n        #bypass-panel.minimized {\n            width: 200px;\n            border-radius: 20px;\n        }\n        input[type=\"text\"] {\n            width: 100%;\n            padding: 10px 14px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            color: #fff;\n            font-size: 14px;\n            transition: all 0.4s ease;\n            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 204, 255, 0.1);\n        }\n        input[type=\"text\"]:focus {\n            border-color: #00ccff;\n            box-shadow: 0 0 18px rgba(0, 204, 255, 0.5), inset 0 2px 6px rgba(0, 0, 0, 0.2);\n            outline: none;\n            transform: scale(1.02);\n        }\n        .checkbox-group {\n            display: flex;\n            gap: 20px;\n            margin: 16px 0;\n        }\n        .checkbox-label {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-size: 14px;\n            color: #e0e0e0;\n            cursor: pointer;\n            transition: color 0.3s ease, transform 0.3s ease;\n        }\n        .checkbox-label:hover {\n            color: #fff;\n            transform: translateY(-2px);\n        }\n        input[type=\"checkbox\"] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n            border-radius: 6px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n        }\n        input[type=\"checkbox\"]:checked {\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border-color: #00ccff;\n            position: relative;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);\n        }\n        input[type=\"checkbox\"]:checked::after {\n            content: '✓';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            color: #fff;\n            font-size: 10px;\n            text-shadow: 0 0 5px rgba(0, 204, 255, 0.7);\n        }\n        .slider-container {\n            margin: 16px 0;\n        }\n        .slider-label {\n            display: flex;\n            justify-content: space-between;\n            font-size: 14px;\n            color: #e0e0e0;\n            margin-bottom: 8px;\n        }\n        .delay-slider {\n            width: 100%;\n            -webkit-appearance: none;\n            height: 8px;\n            background: linear-gradient(90deg, #00ccff, #ff00ff);\n            border-radius: 10px;\n            outline: none;\n            transition: opacity 0.3s ease;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.3);\n        }\n        .delay-slider::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n            transition: transform 0.3s ease;\n        }\n        .delay-slider::-webkit-slider-thumb:hover {\n            transform: scale(1.2);\n        }\n        .delay-slider::-moz-range-thumb {\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n        }\n        .button-group {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 10px;\n            margin-top: 20px;\n        }\n        .extra-buttons {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 10px;\n            margin-top: 10px;\n        }\n        button {\n            padding: 10px;\n            border: none;\n            border-radius: 12px;\n            font-size: 14px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all 0.4s ease;\n            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 204, 255, 0.2);\n        }\n        button:hover {\n            transform: translateY(-3px) scale(1.02);\n            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.4), 0 0 18px rgba(0, 204, 255, 0.4);\n        }\n        .btn-bypass {\n            background: linear-gradient(45deg, #00ccff, #00ffcc);\n            color: #fff;\n        }\n        .btn-change {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n            color: #fff;\n        }\n        .btn-fakeip {\n            background: linear-gradient(45deg, #33cc33, #66ff66);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakeip.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakeip.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-fakebrowser {\n            background: linear-gradient(45deg, #9933ff, #cc66ff);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakebrowser.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakebrowser.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .url-info {\n            font-size: 12px;\n            color: #00ffcc;\n            word-break: break-all;\n            margin: 14px 0;\n            opacity: 0.9;\n            line-height: 1.6;\n            text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);\n        }\n        .author-text {\n            font-size: 12px;\n            color: #888;\n            text-align: center;\n            padding: 10px;\n            border-top: 1px solid rgba(255, 255, 255, 0.08);\n            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.15));\n            box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05);\n            animation: glow 3s infinite alternate;\n        }\n        @keyframes glow {\n            from { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05); }\n            to { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.2); }\n        }\n    ";
    document.head.appendChild(_0x4e54e2);
    const _0x2fc75b = document.createElement("div");
    _0x2fc75b.className = "bypass-header";
    const _0x1d462e = document.createElement('h3');
    _0x1d462e.className = "bypass-title";
    _0x1d462e.textContent = "Bypasser Yeumoney Tool";
    _0x2fc75b.appendChild(_0x1d462e);
    const _0x1cdc5c = document.createElement("button");
    _0x1cdc5c.className = "toggle-btn";
    _0x1cdc5c.onclick = () => {
      _0x2b9bc8.classList.toggle("minimized");
      _0x1cdc5c.classList.toggle("minimized");
    };
    _0x2fc75b.appendChild(_0x1cdc5c);
    _0x2b9bc8.appendChild(_0x2fc75b);
    const _0x457395 = document.createElement("div");
    _0x457395.className = "bypass-content";
    const _0x2679d1 = document.createElement("input");
    _0x2679d1.type = "text";
    _0x2679d1.placeholder = "Enter URL (Optional)";
    _0x457395.appendChild(_0x2679d1);
    const _0x59654c = document.createElement("div");
    _0x59654c.className = "url-info";
    _0x59654c.textContent = "OCR URL: " + _0x3a7524;
    _0x457395.appendChild(_0x59654c);
    const _0xd59749 = document.createElement("div");
    _0xd59749.className = "checkbox-group";
    const _0x5cacbd = document.createElement("input");
    _0x5cacbd.type = "checkbox";
    _0x5cacbd.id = "fetchCode";
    _0x5cacbd.checked = GM_getValue("fetchCode", false);
    const _0x25c690 = document.createElement("label");
    _0x25c690.className = "checkbox-label";
    _0x25c690.htmlFor = "fetchCode";
    _0x25c690.textContent = "Auto Chuyển Trang";
    _0xd59749.appendChild(_0x5cacbd);
    _0xd59749.appendChild(_0x25c690);
    const _0x2e5b2a = document.createElement("input");
    _0x2e5b2a.type = "checkbox";
    _0x2e5b2a.id = "autoStart";
    _0x2e5b2a.checked = GM_getValue("autoStart", false);
    const _0x112b9f = document.createElement("label");
    _0x112b9f.className = "checkbox-label";
    _0x112b9f.htmlFor = "autoStart";
    _0x112b9f.textContent = "Auto Bypass";
    _0xd59749.appendChild(_0x2e5b2a);
    _0xd59749.appendChild(_0x112b9f);
    _0x457395.appendChild(_0xd59749);
    const _0xa42c39 = document.createElement("div");
    _0xa42c39.className = "slider-container";
    const _0x5cdac1 = document.createElement("label");
    _0x5cdac1.className = "slider-label";
    _0x5cdac1.textContent = "Thời Gian Bypass: ";
    const _0x3d0ee4 = document.createElement("span");
    _0x3d0ee4.id = "delay-value";
    _0x3d0ee4.textContent = '5s';
    _0x5cdac1.appendChild(_0x3d0ee4);
    const _0x54d951 = document.createElement("input");
    _0x54d951.type = "range";
    _0x54d951.min = '5';
    _0x54d951.max = "125";
    _0x54d951.value = '5';
    _0x54d951.className = "delay-slider";
    _0x54d951.oninput = function () {
      _0x3d0ee4.textContent = this.value + 's';
    };
    _0xa42c39.appendChild(_0x5cdac1);
    _0xa42c39.appendChild(_0x54d951);
    _0x457395.appendChild(_0xa42c39);
    const _0x97cf01 = document.createElement("div");
    _0x97cf01.className = "button-group";
    const _0x59073c = document.createElement("button");
    _0x59073c.textContent = "Bypass Now";
    _0x59073c.className = "btn-bypass";
    _0x59073c.onclick = async () => {
      try {
        _0x2679d1.readOnly = true;
        const _0x5794e1 = _0x2679d1.value || _0x3a7524;
        _0x2679d1.value = "Chờ Xíu Nhe Ní...";
        if (_0x5f054e && _0xec9955) {
          _0x2679d1.value = "Đang Bypass với IP: " + _0xec9955.ip + ':' + _0xec9955.port;
        }
        if (_0x2aebed) {
          _0x2679d1.value += " | Browser: " + _0x30ecf0.substring(0, 20) + "...";
        }
        const _0x46a2c1 = await _0x29c520(_0x5794e1);
        if (_0x46a2c1) {
          let _0x2e077f = parseInt(_0x54d951.value);
          const _0x3003a9 = setInterval(() => {
            _0x2679d1.value = "Chờ Đợi Là Hạnh Phúc Sau: " + _0x2e077f + "s Thôi!";
            _0x2e077f--;
            if (_0x2e077f < 0) {
              clearInterval(_0x3003a9);
              if (_0x5cacbd.checked) {
                _0x2679d1.value = "Code: " + _0x46a2c1 + " - Đang Chuyển Trang...";
                _0x375b14(_0x46a2c1);
              } else {
                _0x2679d1.value = "Code: " + _0x46a2c1;
              }
              _0x59073c.disabled = false;
              _0x2679d1.readOnly = false;
            }
          }, 1000);
        } else {
          _0x2679d1.readOnly = false;
          _0x2679d1.value = "Error! Xem Lại URL Or Đổi Nhiệm Vụ";
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      } catch (_0x4a39a7) {
        console.error("Bypass Lỗi:", _0x4a39a7);
      }
    };
    _0x97cf01.appendChild(_0x59073c);
    const _0x3ec621 = document.createElement("button");
    _0x3ec621.textContent = "Đổi Nhiệm Vụ";
    _0x3ec621.className = "btn-change";
    _0x3ec621.onclick = async () => {
      _0x2679d1.readOnly = true;
      _0x2679d1.value = "Đang Đổi Nhiệm Vụ...";
      _0xcee09a();
    };
    _0x97cf01.appendChild(_0x3ec621);
    _0x457395.appendChild(_0x97cf01);
    const _0x3711f3 = document.createElement("div");
    _0x3711f3.className = "extra-buttons";
    const _0x23b604 = document.createElement("button");
    _0x23b604.textContent = "Fake IP";
    _0x23b604.className = "btn-fakeip";
    if (_0x5f054e) {
      _0x23b604.classList.add("active");
    }
    _0x23b604.onclick = () => {
      if (!_0x5f054e) {
        const _0x5a2bd = _0x36be05();
        _0x5ec37a(_0x5a2bd);
        _0x5f054e = true;
        _0x23b604.classList.add("active");
        _0x2679d1.value = "Fake IP ON: " + _0x5a2bd.ip + ':' + _0x5a2bd.port;
      } else {
        _0x5e6c9a();
        _0x5f054e = false;
        _0x23b604.classList.remove("active");
        _0x2679d1.value = "Fake IP OFF";
      }
    };
    _0x3711f3.appendChild(_0x23b604);
    const _0x345b80 = document.createElement("button");
    _0x345b80.textContent = "Fake Browser";
    _0x345b80.className = "btn-fakebrowser";
    if (_0x2aebed) {
      _0x345b80.classList.add("active");
    }
    _0x345b80.onclick = () => {
      if (!_0x2aebed) {
        const _0x29287a = _0x2327e4();
        _0xd69aa7(_0x29287a);
        _0x2aebed = true;
        _0x345b80.classList.add("active");
        _0x2679d1.value = "Fake Browser ON: " + _0x29287a.substring(0, 20) + "...";
      } else {
        _0x50de81();
        _0x2aebed = false;
        _0x345b80.classList.remove("active");
        _0x2679d1.value = "Fake Browser OFF";
      }
    };
    _0x3711f3.appendChild(_0x345b80);
    _0x457395.appendChild(_0x3711f3);
    const _0x524519 = document.createElement("div");
    _0x524519.className = "author-text";
    _0x524519.textContent = "Code By Hieudz • Ducknovis • XGreen";
    _0x2b9bc8.appendChild(_0x457395);
    _0x2b9bc8.appendChild(_0x524519);
    document.body.appendChild(_0x2b9bc8);
    if (_0x2e5b2a.checked) {
      _0x59073c.click();
    }
    _0x5cacbd.addEventListener("change", () => GM_setValue("fetchCode", _0x5cacbd.checked));
    _0x2e5b2a.addEventListener("change", () => GM_setValue("autoStart", _0x2e5b2a.checked));
  }
  const _0x863127 = window.location.href;
  window.onload = () => {
    if (_0x863127.includes("https://yeumoney.com/")) {
      _0x2f35f2().then(_0x5b68d4 => {
        _0x2c0921(_0x5b68d4);
      })["catch"](_0x5649e6 => {
        console.error("Lỗi khi nhận diện URL:", _0x5649e6);
        _0x2c0921("Lỗi! Tự nhập URL hoặc Reload");
      });
    } else {
      if (_0x863127.includes("https://docs.google.com/spreadsheets/")) {
        _0x392ddd().then(_0x36f80f => {
          if (_0x36f80f) {
            window.location.href = _0x36f80f;
          }
        })["catch"](_0x9a201e => console.error("Lỗi khi gọi hàm:", _0x9a201e));
      } else if (_0x863127.includes("https://docs.google.com/forms/")) {
        _0xa553b2();
      }
    }
  };
})();