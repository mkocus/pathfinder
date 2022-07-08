/**
 * Main setupPage application
 */

define([
    'jquery'
], ($) => {
    'use strict';
    const translations = {};

    return {
        load: function (name, req, onLoad, config) {
            $.getJSON('/api/I18n/get', (data) => {
                for(const trans of data.translations) {
                    translations[trans.original] = trans.translation;
                }

                onLoad(function (message) {
                    message = message.replaceAll(/\s\s+/ig, ' '); // Strip all newlines and multiple spaces
                    if(translations[message]) {
                        return translations[message];
                    }

                    return message;
                });
            });

         }
    };
});