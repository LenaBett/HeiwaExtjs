Ext.define('HeiwaExtjs.view.posts.PostFormPopup', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    controller: 'postformpopupcontroller',
    title: "Add Post",
    height: 350,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'form',
            reference: 'postform',
            itemId: 'postform',
            jsonSubmit: true,
            bodyPadding: 10,
            modelValidation: true,
            layout: 'form',
            items: [
                {
                    allowBlank: true,
                    readOnly: false,
                    xtype: 'textfield',
                    reference: 'postId',
                    fieldLabel: 'Post ID',
                    name: 'id',
                    emptyText: 'Post id'
                },
                {
                    allowBlank: false,
                    xtype: 'textfield',
                    fieldLabel: 'User ID',
                    name: 'userId',
                    emptyText: 'user id'
                },
                {
                    allowBlank: false,
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    name: 'title',
                    emptyText: 'title'
                },
                {
                    allowBlank: false,
                    xtype: 'textareafield',
                    fieldLabel: 'Body',
                    name: 'body',
                    emptyText: 'body'
                },
            ],

        }],
        buttons: [
            {
                text: 'Save',
                handler: 'onSaveClicked'
            },
            {
                text: 'Clear',
                handler: 'onClearClicked'
            },
            {
                text: 'Cancel',
                handler: 'onCancelClicked'
            },
        ]
    }] 
})