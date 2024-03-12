Ext.define('HeiwaExtjs.store.Todos', {
    extend: 'Ext.data.Store',
    alias: 'store.todos',
    model: 'HeiwaExtjs.model.Todo',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/todos',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    },

})