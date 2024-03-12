Ext.define('HeiwaExtjs.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Security',
                iconCls:'fas fa-users-cog',
                children:[
                    {
                        text:'Users',
                        iconCls:'fa fa-users',
                        classname:'usergrid',
                        leaf:true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fas fa-user-secret',
                        classname:'todogrid',
                        leaf: true
                    }
                ]

            },
            {
                text: 'Static Data',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'User Details',
                        iconCls: 'fa-database',
                        className: 'parentpanel',
                        leaf: true
                    },
                    {
                        text: 'Posts',
                        iconCls: 'fa fa-users',
                        classname:'postgrid',
                        leaf: true
                    },
                    {
                        text: 'Personnel',
                        iconCls: 'fa fa-users',
                        classname:'mainlist',
                        leaf: true
                    }
                ]

            },

        ]
    }
})