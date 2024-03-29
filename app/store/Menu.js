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
                        leaf:true
                    },
                    {
                        text: 'Data Groups',
                        iconCls: 'fa-layer-group',
                        className: 'summarypanel',
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
                        className: 'postgrid',
                        leaf: true
                    },
                    {
                        text: 'Personnel',
                        iconCls: 'fa fa-users',
                        className: 'mainlist',
                        leaf: true
                    }
                ]

            },
            {
                text: 'Review',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Review Panel',
                        iconCls: 'fa fa-users',
                        className: 'reviewpanel',
                        leaf: true
                    }

                ]

            },

        ]
    }
})