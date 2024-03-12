Ext.define('HeiwaExtjs.view.fmviews.DataPanel',{
    extend:'Ext.tab.Panel',
    xtype:'datapanel',
    height:0,
    items: [{
        title: 'Posts',
        items: [
           {
                xtype:'postgrid'
           }
        ]
    }, {
        title: 'Todos',
        items: [
            {
                xtype: 'todogrid'
            }
        ]
    }]
})