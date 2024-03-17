Ext.define('HeiwaExtjs.view.review.ReviewViewModel',{
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.reviewviewmodel',

    stores:{
        posts:{
            model:'HeiwaExtjs.model.Post',
            autoLoad:true
        },
        dummyUsers: {
            model: 'HeiwaExtjs.model.User',
            autoLoad: true
        }
    }
})