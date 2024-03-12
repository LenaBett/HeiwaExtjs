Ext.define('HeiwaExtjs.view.todos.TodoGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todogridcontroller',
    mixin: ['HeiwaExtjs.mixin.GridMixin'],

    onAddTodo: function (btn, e, eOpts) {
        Ext.create({
            xtype: 'todoform',
            viewModel: {
                data: {
                    newTitle: "Add New Todo"
                }
            }
        })
    },
    onViewTodo: function (btn, e, eOpts) {
        let record = this.getSelectedRecordByXType('todogrid');
        Ext.create({
            xtype: 'todoform',
            viewModel: {
                data: {
                    newTitle: "Update Todo",
                    record: record
                }
            }
        })
    }
})