// ==UserScript==
// @name        LIHKGredirect
// @namespace   Kaden
// @description Auto redirect to web lighkg.
// @include     https://lihkg.com/thread/*
// @downloadURL https://raw.githubusercontent.com/l2003201/LIHKGredirect/master/LIHKGredirect.js
// @run-at      document-start
// @version     0.0.2
// ==/UserScript==

(function() {
    window.location = "https://lihkg.na.cx" + location.pathname;
})();
