/**
 *  shortcuts dialog
 */

define([
    'jquery',
    'app/init',
    'app/util',
    'bootbox',
    'app/key',
    'i18n!'
], function($, Init, Util, bootbox, Key, __){

    'use strict';

    let config = {
        // map dialog
        shortcutsDialogId: 'pf-shortcuts-dialog',                                       // id for shortcuts dialog
    };

    /**
     * shows the map manual modal dialog
     */
    $.fn.showShortcutsDialog = function(){
        requirejs(['text!templates/dialog/shortcuts.html', 'mustache'], function(template, Mustache){

            let data = {
                id:                     config.shortcutsDialogId,
                shortcuts:              Key.getGroupedShortcuts()
            };

            let content = Mustache.render(template, data);

            // show dialog
            let shortcutsDialog = bootbox.dialog({
                title: __('Keyboard Shortcuts'),
                message: content,
                size: 'large',
                buttons: {
                    success: {
                        label: __('close'),
                        className: 'btn-default'
                    }
                },
                show: true
            });

        });
    };
});