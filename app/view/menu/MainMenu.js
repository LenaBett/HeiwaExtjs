Ext.define('HeiwaExtjs.view.menu.MainMenu',{
    extend:'Ext.tree.Panel',
    xtype:'mainmenu',
    rootVisible: false,
   useArrows: true,
    store:{
        type:'menu'
    }
})