(function() {
    'use strict';

    angular
        .module('app')
        .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['appFactory'];

    /* @ngInject */
    function ApplicationController(appFactory) {
        var vm = this;
        vm.applications = [];

        vm.getApi = getApi;
        
        function getApi() {
        	appFactory
        		.getAll()
        		.then(response => {
        			vm.applications = response.data;
        		})
        }
       
    }
})();