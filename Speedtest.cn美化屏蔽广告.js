// ==UserScript==
// @name         Speedtest净化/屏蔽广告
// @namespace    GCH
// @version      0.1
// @description  Speedtest.cn页面净化/屏蔽广告/美化
// @author       Peterg
// @match        https://www.speedtest.cn/*
// @icon         https://www.speedtest.cn/images/ico/favicon.ico
// @grant        none
// @run-at       document-end
// @license      GPL3.0
// ==/UserScript==

(function () {

    var ad_js_paths_one = ['#app > section > div.speed-home-warp > div.speed-home-content > div', 5, 2,
        '#app > section > div', 5, 3,
    ];

    var ad_js_paths_multiple = ['#app > div.sus-window',
        '#app > section > div.wg > div.network-module',
        '#app > div.download-warp',
        '#speedApp',
        '#navbarSupportedContent',
        '#app > footer',
        '#app > section > div > div.tools > div.more-tools-list-index',
        '#app > section > div > div.tools > div.download',
        '#app > section > div > div.toolbox',
        '#app > section > div > div.txt_wrap > div.pub-tab > ul > li.active',
        '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div.copyWriter',
        '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.gauge-warp > div.app-download-wrap',
        '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp.speedtest-end-warp > div.account_wrap > div.right',
        '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.speed-run-warp.speed-run-warp-border > div.link-more-tool'
    ];

    function adRemoveOne(ad_elements, ad_length, num) {
        ad_elements && (ad_elements.length == ad_length) && ad_elements[num].remove();
    }

    function adRemoveIf() {
        var ad_elements = document.querySelectorAll("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div > ul > li");
        for (var i = 0; i < ad_elements.length; i++) ad_elements[i].querySelector("p.exclusive") && ad_elements[i].remove();
    }

    function findAD(js_path) {
        return document.querySelector(js_path) ? document.querySelector(js_path) : null;
    }

    function findADs(js_path) {
        return document.querySelector(js_path) ? document.querySelectorAll(js_path) : null;
    }

    function adRemove(ad_element) {
        if (ad_element) ad_element.remove();
    }

    function pageMutation() {
        var targetNode = document.getElementById('app');
        var config = { attributes: true, childList: true, subtree: true };
        var callback = function (mutationsList) {
            mutationsList.forEach(function (item, index) {
                fristRemove();
                fixLayout();
                adRemoveIf();
            });
        };
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    function fristRemove() {
        for (var j = 0; j < (ad_js_paths_multiple.length / 3); j++) adRemoveOne(findADs(ad_js_paths_one[j * 3]), ad_js_paths_one[j * 3 + 1], (ad_js_paths_one[j * 3 + 2] - 1));
        for (var i = 0; i < ad_js_paths_multiple.length; i++) adRemove(findAD(ad_js_paths_multiple[i]));
    }

    function fixLayout() {
        document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div") && (document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div").style.width = "100%");
        if (document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div > ul > li > p")) {
            var lays = document.querySelectorAll("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div > ul > li > p");
            for (var i = 0; i < lays.length; i++) if (lays[i].style.width != "100%") lays[i].style.width = "100%";
        }
    }
    pageMutation();
    fixLayout();
    adRemoveIf();
})();
