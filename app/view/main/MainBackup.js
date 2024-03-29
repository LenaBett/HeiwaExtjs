/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('HeiwaExtjs.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'HeiwaExtjs.view.main.MainController',
        'HeiwaExtjs.view.main.MainModel',
        'HeiwaExtjs.view.main.List'

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        },
        items: [
            {
                text: 'Logout',
                handler: 'onLogout'
            }
        ]
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Data Panel',
            iconCls: 'fa-database',
            items: [
                {
                    xtype: 'parentpanel'
                }
            ]
        },
        {
            title: 'Data Groups',
            iconCls: 'fa-layer-group',
            items: [
                {
                    xtype: 'summarypanel'
                }
            ]
        }, {
            title: 'Home',
            iconCls: 'fa-home',
            items: [

            ]
        }, {
            title: 'Settings',
            iconCls: 'fa-cog',
            items: [

            ]
        }]
});
