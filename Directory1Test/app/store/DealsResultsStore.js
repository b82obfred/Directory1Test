Ext.define('Mobile.store.DealsResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.DealsResultsModel',
        //sorters: 'Name',

        pageSize: 10,
        autoLoad: false,

        proxy: {
            type: 'ajax',
            url: 'http://directory1.business2mobile.com/DesktopModules/WebApiB2M/API/Directory1/DealsDataFeedGet',

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