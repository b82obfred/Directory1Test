Ext.define('Mobile.store.ListingsResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.ListingsResultsModel',
        //sorters: 'Name',

        pageSize: 10,
        autoLoad: false,

        proxy: {
            type: 'ajax',
            url: 'http://directory1.business2mobile.com/DesktopModules/WebApiB2M/API/Directory1/ListingsDataFeedGet',

            pageParam: 'page',
            limitParam: 'rpp',
            
            extraParams: {
                q: 'featured'
            },

            method: 'get',

            reader: {
                type: 'json'
            }
        }
    }
});