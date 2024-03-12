Ext.define('HeiwaExtjs.model.Result', {
    extend: 'Ext.data.Model',
    fields: ['student', 'subject', {
        name: 'mark',
        type: 'int'
    }]
});