// ==UserScript==
// @name         Speedtest纯净&净化&屏蔽&美化
// @namespace    https://github.com/GangChengHuang
// @version      1.4
// @description  Speedtest.cn页面净化/美化，给你一个纯净的网页！
// @author       Peterg
// @match        https://www.speedtest.cn/*
// @match        https://m.speedtest.cn/*
// @icon         https://www.speedtest.cn/images/ico/favicon.ico
// @grant        none
// @run-at       document-end
// @license      GPL3.0
// ==/UserScript==

(function () {

    var ad_js_paths_one = ['#app > section > div.speed-home-warp > div.speed-home-content > div', 5, 2,
                           '#app > section > div', 5, 3,
                           '#__layout > div > div.footer > div', 5, 2,
                           '#__layout > div > div.footer > div', 4, 2,
                           '#__layout > div > div.record.nuxt_wrap.hasFooter > div.title > div > img', 2, 2,
                           '#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > ul > li', 13, 1,
                          ];

    var ad_js_paths = ['#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > ul', 4, 0,
                       '#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > div', 4, 0,];


    var ad_js_paths_multiple = ['#app > div.sus-window',
                                '#app > section > div.wg > div.network-module',
                                '#app > div.download-warp',
                                '#speedApp',
                                '#navbarSupportedContent',
                                '#app > footer',
                                '#app > section > div > div.tools > div.more-tools-list-index',
                                '#app > section > div > div.tools > div.download',
                                '#app > section > div > div.toolbox',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div > div > div.speed_start_top_wrap > div',
                                '#header > div.right > img',
                                '#header > div.right > div.more',
                                'body > div.wrap.fadein',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div.speed-rocket-container',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div.speedtest_wrap > div > div.speedEndEnt_wrap.endent_wrap',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div.speedtest_wrap > div > div.add_wrap.speed_add_wrap > p.more',
                                '#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > div.tools-banner',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div > div > div.tools-banner',
                                '#__layout > div > div > div.tools-banner',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div > div.node_select_picker.van-popup.van-popup--bottom > div > div.download-app',
                                '#__layout > div > div.record.nuxt_wrap.hasFooter > div.content-wrap > div.list-wrap > div.list > div > div.nologin',
                                '#__layout > div > div > div.speed-rocket-container',
                                '#__layout > div > div > div.main.main-padding > div > dl.user-sign-brand-test > dd.button-link',
                                '#__layout > div > div > div.to-diagnostic-report',
                                '#__layout > div > div.bgc-black',
                                '#app > section > div.speed-home-warp > div.speed-twoads481-wrap.speed-twoads481-wrap-index',
                                '#app > section > div.speed-home-warp > div.speed-home-content > div.vertisingSpace.index-speedtest-content-adv.vertisingSpace-left',
                                '#app > section > div.speed-home-warp > div.speed-home-content > div.speed-bottom-ads',
                                '#app > section > div.container',
                                '#app > section > div.speed-home-warp > div > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.speed-run-warp.speed-run-warp-border > div.shareresultbox > div.newshare',
                                '#app > section > div.speed-home-warp > div > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.speed-run-warp.speed-run-warp-border > div.mark_wrap',
                                '#app > section > div.toolbox > div > div.tools-content-box > div.right-ads',
                                '#app > section > div.speed-home-warp > div > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.speed-run-warp.speed-run-warp-border > div.transfer-warp > div.result-wrap > div.speed-end-ent-wrap.__web-inspector-hide-shortcut__',
                                '#speedUpNotice',
                                '#app > section > div.speed-home-warp > div > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.speed-run-warp.speed-run-warp-border > div.transfer-warp > div.result-wrap > div.speed-end-ent-wrap',
                                '#app > section > div.speed-home-warp > div > div.speedtest-warp.speedtest-end-warp > div.account_wrap',
                                '#app > section > div > div.result-show-ani > div > div.caption > p > div',
                                '#app > section > div.speed-twoads-wrap',
                                '#header > div.left',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div > div.van-overlay.alertAd',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div > div.ending_wrap.ending-tools-wrap > div.mark_wrap.mark_wrap',
                                '#__layout > div > div.nuxt_wrap.hasFooter > div > div > div.speedup > div.info > div:nth-child(2) > div > div.right',
                                '#app > section > div > div.txt_wrap > div.pub-tab > ul > li.active',
                                '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div.copyWriter',
                                '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.gauge-warp > div.app-download-wrap',
                                '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp.speedtest-end-warp > div.account_wrap > div.right',
                                '#app > section > div.wg > div.result-show-ani > div.result-history > div.caption',
                                '#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.speed-run-warp.speed-run-warp-border > div.link-more-tool'
                               ];

    function adRemoveOne(ad_elements, ad_length, num) {
        ad_elements && (ad_elements.length == ad_length) && ad_elements[num].remove();
    }

    function adRemoveIf() {
        var ad_elements = document.querySelectorAll("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div > ul > li");
        for (var i = 0; i < ad_elements.length; i++) ad_elements[i].querySelector("p.exclusive") && ad_elements[i].remove();
        var ad_elements2 = document.querySelectorAll("#__layout > div > div.nuxt_wrap.hasFooter > div > div.node_select_picker.van-popup.van-popup--bottom > div > div.node_list.van-list > div");
        for (var k = 0; k < ad_elements2.length; k++) ad_elements2[k].querySelector("div.tip") && ad_elements2[k].remove();
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
        var targetNode = document.getElementById('app') ? document.getElementById('app') : document.getElementById('__nuxt');
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
        for (var k = 0; k < (ad_js_paths.length / 3); k++) {
            var elems = findADs(ad_js_paths[k * 3]);
            if (elems && (elems.length == (ad_js_paths[k * 3 + 1]))) {
                for (var l = 0; l < elems.length; l++) {
                    if (l != (ad_js_paths[k * 3 + 2])) {
                        adRemove(elems[l]);
                    }
                }
            }
        }
    }

    function fixLayout() {
        var change_content = document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div");
        if (change_content && change_content.style.width != "100%") {
            change_content.style.width = "100%";
        }
        var lip = document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div > ul > li > p");
        if (lip) {
            var lays = document.querySelectorAll("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div > ul > li > p");
            for (var i = 0; i < lays.length; i++) if (lays[i].style.width != "100%") lays[i].style.width = "100%";
        }

        var test_text = document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.start-circle.start-speed-circle > p") ? document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.start-circle.start-speed-circle > p") : document.querySelector("#__layout > div > div.nuxt_wrap.hasFooter > div > div > div.start-animation-wrap.start_circle_wrap > div > p");
        if (test_text && (test_text.textContent == "测速")) {
            test_text.textContent = "纯净测速";
        }
        var result_wrap = document.querySelector("#app > section > div.speed-home-warp > div > div.speedtest-warp.speedtest-end-warp > div.speedtest-run.speed-end-wrap.add-speed-warp > div.speed-run-warp.speed-run-warp-border > div.transfer-warp > div.result-wrap > div:nth-child(1)");
        if (result_wrap && result_wrap.attributes.length != 0) {
            result_wrap.removeAttribute('data-v-a276378e');
        }
    }
    pageMutation();
    fixLayout();
    adRemoveIf();
})();
