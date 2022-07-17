/**
 * Translation
 */

define([], () => {
    'use strict';
    const translations = {};

    const translateFunc = function (message) {
        message = message.replaceAll(/\s\s+/ig, ' '); // Strip all newlines and multiple spaces
        if (translations[message]) {
            return translations[message];
        }

        return message;
    };

    return {
        load: function (name, req, onLoad, config) {
            if (config.isBuild) {
                onLoad(function (message) {
                    // Do nothing
                });
            } else {
                let ajaxRequest = new XMLHttpRequest();
                ajaxRequest.onreadystatechange = function() {
                    if(ajaxRequest.readyState === 1) {
                        ajaxRequest.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
                        ajaxRequest.setRequestHeader('pf-character', NaN);
                        ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                        ajaxRequest.setRequestHeader('X-Requested-With','XMLHttpRequest');
                    } else if(ajaxRequest.readyState === 4){
                        //the request is completed, now check its status
                        if(ajaxRequest.status === 200){
                            const data = JSON.parse(ajaxRequest.responseText);
                            for (const trans of data.translations) {
                                translations[trans.original] = trans.translation;
                            }
                        }
                        else{
                            console.log('Status error: ' + ajaxRequest.status);
                        }
                        onLoad(translateFunc);
                    }
                    else{
                        console.log('Ignored readyState: ' + ajaxRequest.readyState);
                    }
                };

                ajaxRequest.open('POST', '/api/I18n/get');
                ajaxRequest.send();
            }
         }
    };
});