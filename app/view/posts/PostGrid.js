Ext.define('HeiwaExtjs.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    reference: 'postgrid',
    controller: 'postgridviewcontroller',

    store: {
        type: 'posts'
    },

    tbar: [ {
        fieldLabel: 'Search',
        xtype: 'textfield',
        listeners: {
            change: 'onSearchKeyValueChange'
        }
    },
    {
        fieldLabel: 'Choose User',
        xtype: 'combo',

        store: {
            type: 'users'
        },
        queryMode: 'local',
        displayField: 'username',
        valueField: '_id',
        listeners:{
            change:'onUserSelectionChange',
            select:'onUserSelected'
        }
    },
    {
        text: 'Add Post',
        listeners: {
            click: 'onAddPostClicked'
        }
    },
    {
        text: 'Edit/View Post',
        iconCls: 'fas fa-pencil-alt',
        listeners: {
            click: 'onEditClicked'
        }
    },
    {
        text: 'Delete Post',
        iconCls: 'far fa-trash-alt',
        listeners: {
            click: 'onDeleteClicked'
        }
    },
    {
        text: 'Form Fields',
        listeners: {
            click: 'onFormFieldClicked'
        }
    },
    {
        text: 'VTypes',
        listeners: {
            click: 'onVTypesClicked'
        }
    },
    {
        text: 'Checkout Form',
        listeners: {
            click: 'onLayoutsClicked'
        }
    }],

    columns: [
        { 
            dataIndex: '_id', 
            text: 'ID', 
            // hidden: 'false', -hidden defaults to true
        },

        { 
            dataIndex: 'title', 
            text: 'Title', 
            flex: 1 
        },
        { 
            dataIndex: 'body', 
            text: 'Body', 
            flex: 2 
        },
        { 
            dataIndex: 'userId', 
            text: 'User ID', 
            flex: 2 
        },
    ],

    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,


})