Ext.define("HeiwaExtjs.view.demo.CustomWindow", {
    extend: 'Ext.window.Window',
    title: "Heiwa App",
    height: 200,
    width: 520,
    autoShow: true,
    maximizable: true,
    closable:false,


})
Ext.onReady(function() {
Ext.create("HeiwaExtjs.view.demo.CustomWindow");
});
