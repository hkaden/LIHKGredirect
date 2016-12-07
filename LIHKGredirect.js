// ==UserScript==
// @name        LIHKGredirect
// @namespace   Kaden
// @description Auto redirect to web lighkg.
// @include     https://lihkg.com/thread/*
// @version     0.0.1
// ==/UserScript==

(function() {
    window.location = "https://lihkg.na.cx" + location.pathname;
})();