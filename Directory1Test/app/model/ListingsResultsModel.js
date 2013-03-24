Ext.define('Mobile.model.Directory1_Deals', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['DealId', 'Deal', 'Image'],
        belongsTo: 'Mobile.model.ListingsResultsModel'
    }
});

Ext.define('Mobile.model.Directory1_Menus', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['Menu', 'Image'],
        belongsTo: 'Mobile.model.ListingsResultsModel'
    }
});

Ext.define('Mobile.model.ListingsResultsModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
        'Listing_Id',
        'Name',
        'Address',
        'Phone',
        'WebSite',
        'Logo',
        'ValueStatement',
        'RedeemEmail',
        'LocationsRollup',
        'DealsCount',
        'Directory1_Deals',
        'Directory1_Menus'],
        associations: [
            { type: 'hasMany', model: 'Directory1_Deals', name: 'Directory1_Deals' },
            { type: 'hasMany', model: 'Directory1_Menus', name: 'Directory1_Menus' }
        ]
    }
});
