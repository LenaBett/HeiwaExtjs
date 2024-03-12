/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('HeiwaExtjs.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onLogout: function(){
        // remove localstorageley/value
        localStorage.removeItem('MyAppLoggedIn');

        // remove main menu
        this.getView().destroy();

        // add the login window
        Ext.widget('login');
    }
});
