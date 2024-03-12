/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('HeiwaExtjs.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'HeiwaExtjs',
        footer: '&copy Heiwa '+new Date().getFullYear(),
    }
});
