// ==UserScript==
// @name         YouTube Home: Music correct active chip
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Makes "Music" both logically and visually active on the main YouTube page when you first open it.
// @match        https://www.youtube.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const TARGET_LABEL = 'Music'; // change it for your language

    let alreadyActivated = false;
    let userOverridden   = false;

    function isHomePage() {
        return location.pathname === '/' || location.pathname === '';
    }

    function getChips() {
        return Array.from(document.querySelectorAll(
            'yt-chip-cloud-chip-renderer, ytd-feed-filter-chip-bar-renderer tp-yt-paper-chip'
        ));
    }

    function getActiveChip() {
        return getChips().find(chip =>
            chip.getAttribute('aria-selected') === 'true'
        );
    }

    function getMusicChip() {
        return getChips().find(chip => {
            const text = (chip.innerText || '').trim();
            return text.toLowerCase() === TARGET_LABEL.toLowerCase();
        });
    }

    function ensureMusicActive() {
        if (!isHomePage()) return false;
        if (alreadyActivated || userOverridden) return false;

        const musicChip = getMusicChip();
        if (!musicChip) return false;

        const active = getActiveChip();

        if (active === musicChip) {
            alreadyActivated = true;
            return true;
        }

        musicChip.click();
        alreadyActivated = true;
        return true;
    }

    function attachUserOverrideListener() {
        getChips().forEach(chip => {
            chip.addEventListener('click', () => {
                userOverridden = true;
            }, { once: false });
        });
    }

    function setup() {
        if (!isHomePage()) return;

        setTimeout(() => {
            ensureMusicActive();
            attachUserOverrideListener();
        }, 800);

        const observer = new MutationObserver(() => {
            const ok = ensureMusicActive();
            attachUserOverrideListener();
            if (ok) observer.disconnect();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    setup();

    window.addEventListener('yt-navigate-finish', () => {
        alreadyActivated = false;
        userOverridden   = false;
        setup();
    });
})();
