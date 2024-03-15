/**
 * @Mode: DuyVinh
 * @Website: DinhDuyVinh.Id.Vn
**/

// Copy To Clipboard 
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    Swal.fire("Thông báo", "Copy thành công!", "success");
}
// Format url 
var url = window.location.href;
var uri = window.location.toString();
var fb1 = url.substring(0, url.indexOf("?fbclid"));
var fb2 = url.substring(0, url.indexOf("&fbclid"));
if (uri.length - fb1.length > 0) window.history.replaceState({}, document.title, fb1);
if (uri.length - fb2.length > 0) window.history.replaceState({}, document.title, fb2);
// Dark mode
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}
toggleSwitch.addEventListener("change", switchTheme);
// Click heart
!(function (e, t, a) {
    function n() {
        c(
            ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
        ),
            o(),
            r();
    }
    function r() {
        for (var e = 0; e < d.length; e++)
            d[e].alpha <= 0
                ? (t.body.removeChild(d[e].el), d.splice(e, 1))
                : (d[e].y--,
                  (d[e].scale += 0.004),
                  (d[e].alpha -= 0.013),
                  (d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"));
        requestAnimationFrame(r);
    }
    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t(), i(e);
        };
    }
    function i(e) {
        var a = t.createElement("div");
        (a.className = "heart"), d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a);
    }
    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e));
        } catch (t) {
            a.styleSheet.cssText = e;
        }
        t.getElementsByTagName("head")[0].appendChild(a);
    }
    function s() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
    }
    var d = [];
    (e.requestAnimationFrame = (function () {
        return (
            e.requestAnimationFrame ||
            e.webkitRequestAnimationFrame ||
            e.mozRequestAnimationFrame ||
            e.oRequestAnimationFrame ||
            e.msRequestAnimationFrame ||
            function (e) {
                setTimeout(e, 1e3 / 60);
            }
        );
    })()),
        n();
})(window, document);
//auto phát nhạc
            function __dinhduyvinh() {
             dinhduyvinhsound__();
            }
            const dinhduyvinh_List = [
         "//files.catbox.moe/aqpz0u.mp3", // 3107 ft 267
         "//files.catbox.moe/b4bs4a.mp3", // 3107
         "//files.catbox.moe/h9ytv9.mp3", // 3107 2
         "//files.catbox.moe/u1rf8s.mp3", // 3107 3 Wn x Nâu x Duongg x Titie
         "//files.catbox.moe/lmmq77.mp3" // 3107 4 x Erik ft Nâu
       ];
       //Random music
       let index = Math.floor(Math.random() * dinhduyvinh_List.length);
       const audio = new Audio(dinhduyvinh_List[index]);
       function dinhduyvinhsound__() {
         audio.play();
       }
       document.addEventListener("click", dinhduyvinhsound__);
       audio.addEventListener("ended", function() {
         index = (index + 1) % dinhduyvinh_List.length;
         audio.src = dinhduyvinh_List[index];
         audio.play();
       });

// Popup Chào Mừng
    Swal.fire("Welcome !", "Chào Mừng Bạn Đến Với Website Của Đinh Duy Vinh.", "success");
