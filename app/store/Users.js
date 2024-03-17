Ext.define('HeiwaExtjs.store.Users',{
    extend:'Ext.data.Store',
    alias:'store.users',
    storeId:'users',
    model:'HeiwaExtjs.model.User',
    autoLoad: true,
    // proxy:{
    //     type:'rest',
    //     url:'http://localhost:3000/users',
    //     reader:{
    //         type:'json',
    //         rootProperty:'rows',
    //         totalProperty:'totalCount'
    //     }
    // },

})