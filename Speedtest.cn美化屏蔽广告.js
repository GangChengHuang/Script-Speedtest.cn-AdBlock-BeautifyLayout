// ==UserScript==
// @name         Speedtest纯净&净化&屏蔽&美化&新版本大升级
// @namespace    https://github.com/GangChengHuang
// @version      2.0
// @description  Speedtest.cn页面净化/美化，给你一个纯净的网页！新版本更无感！
// @author       Peterg
// @match        https://www.speedtest.cn/*
// @match        https://m.speedtest.cn/*
// @icon         https://www.speedtest.cn/images/ico/favicon.ico
// @grant        none
// @run-at       document-start
// @license      GPL3.0
// ==/UserScript==

(function () {
var adLists_www = ['.speed-twoads481-wrap','.speed-bottom-ads','.wg','.sus-window','.toolbox','.insight-wrap','.sponsor','.footer-container','.neighbors-index','#speedUpNotice','#navbarSupportedContent','.copyWriter','.exclusive'];
    var adLists_www2 = ['.account_wrap','.speed-end-ent-wrap','.link-more-tool','.app-download-wrap','.shareresultbox','.mark_wrap'];
    var adLists_m = ['#header .left','#header .right','.speed_start_top_wrap','.speed-rocket-container','.download-app','.item .tip','#__layout > div > div.footer > div:nth-child(2)','#__layout > div > div.footer > div:nth-child(3)','.nologin','#__layout > div > div.record.nuxt_wrap.hasFooter > div.title > div > img:nth-child(2)','.button-link','.to-diagnostic-report'];
    var adLists_m2 = ['.alertAd','#__layout > div > div.nuxt_wrap.hasFooter > div.speedtest_wrap > div.ending_wrap.ending-tools-wrap > div.speedup > div.info > div:nth-child(2) > div > div.right','.speedEndEnt_wrap','#__layout > div > div.nuxt_wrap.hasFooter > div.speedtest_wrap > div > div:nth-child(7)','#__layout > div > div.footer > div > div > a > div.label','.user-sign-brand'];
    var adLists_bigdata = ['.selectButton','.login','.head-select','.login-view','v-modal','el-dialog__wrapper',''];
    var adLists_m_tools = ['.tools-banner','#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > div:nth-child(3)','#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > ul:nth-child(4)','#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > div:nth-child(5)','#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > ul:nth-child(6)','#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > div:nth-child(7)','#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > ul:nth-child(8)','#__layout > div > div.nuxt_wrap.tools_wrap.tools_parcel.hasFooter > ul:nth-child(2) > li:nth-child(1)',''];
    function setADdisplayNone(adLists) {
        for (const adName of adLists) {
            GM_addStyle(adName+'{display:none !important}');
        }
    }
    const url = new URL(window.location.href);

    if (url.host === 'm.speedtest.cn') {
        setADdisplayNone(adLists_m);
        setADdisplayNone(adLists_m2);
        setADdisplayNone(adLists_m_tools);
    }
    if (url.host === 'bigdata.speedtest.cn') {
        setADdisplayNone(adLists_bigdata);
    }
    if (url.host === 'www.speedtest.cn') {
        setADdisplayNone(adLists_www);
        setADdisplayNone(adLists_www2);
    }
    function fixLayout() {
        var test_text = document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.start-circle.start-speed-circle > p")? document.querySelector("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.start-circle.start-speed-circle > p") : document.querySelector("#__layout > div > div.nuxt_wrap.hasFooter > div > div > div.start-animation-wrap.start_circle_wrap > div > p");
        if (test_text && (test_text.textContent != "纯净测速")) {
            test_text.textContent = "纯净测速";
        }
    }
    function adRemoveIf() {
        var ad_elements = document.querySelectorAll("#app > section > div.speed-home-warp > div.speed-home-content > div.speedtest-warp > div.dialog-container-change-warp > div > div.change-content > div > ul > li");
        for (var i = 0; i < ad_elements.length; i++) ad_elements[i].querySelector("p.exclusive") && ad_elements[i].remove();
        var ad_elements2 = document.querySelectorAll("#__layout > div > div.nuxt_wrap.hasFooter > div > div.node_select_picker.van-popup.van-popup--bottom > div > div.node_list.van-list > div");
        for (var k = 0; k < ad_elements2.length; k++) ad_elements2[k].querySelector("div.tip") && ad_elements2[k].remove();
    }
    GM_addStyle('.node-item{width: 95% !important}');
    GM_addStyle('.node-item ul li p[data-v-51563936]{width: 100% !important}');
    GM_addStyle('.footer .item a[data-v-a9e53320]{background-size: .80rem !important}');
    function pageMutation() {
        var targetNode = document.getElementById('app') ? document.getElementById('app') : document.getElementById('__nuxt');
        var config = { attributes: true, childList: true, subtree: true };
        var callback = function (mutationsList) {
            mutationsList.forEach(function (item, index) {
                fixLayout();
                adRemoveIf();
            });
        };
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    unsafeWindow.addEventListener('load', ()=>{
        fixLayout();
        pageMutation();
    });
})();
