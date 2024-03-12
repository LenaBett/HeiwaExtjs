Ext.define('HeiwaExtjs.view.groupsummary.SummaryPanel',{
    extend:'Ext.panel.Panel',
    xtype:'summarypanel',
    items: [{
        title: 'Employee Grouping',
        items: [
           {
                xtype:'employeegrid'
           }
        ]
    }, {
        title: 'Results Summary',
        items: [
            {
                xtype: 'resultgrid'
            }
        ]
    }]
})