Ext.define('HeiwaExtjs.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'HeiwaExtjs.model.Post',
    requires: ['HeiwaExtjs.model.Post'],
    autoLoad:true

})