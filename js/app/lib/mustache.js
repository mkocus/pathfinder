define([
    'i18n!',
    'mustacheOrg'
], function (__, mustache) {
    'use strict';

    /**
     * Translation wrapper for mustache templating engine
     */
    return {
        render: function (template, data) {
            data.translate = function () {
                return function (text, render) {
                    return render(__(text));
                };
            };
            return mustache.render(template, data);
        },
        parse: mustache.parse
    };
});