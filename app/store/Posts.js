Ext.define('HeiwaExtjs.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'HeiwaExtjs.model.Post',
    requires: ['HeiwaExtjs.model.Post'],
    // autoLoad: true,
    sorters: ['id'],
    pageSize: 25 
    // filters: {
    //     property: 'userId',
    //     value: '5'
    // }

}) 