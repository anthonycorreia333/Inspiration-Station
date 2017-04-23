(function() {
    'use strict';

    angular
        .module('app')
        .factory('appFactory', appFactory);

    appFactory.$inject = ['$http'];

    /* @ngInject */
    function appFactory($http) {
        var service = {
            getAll: getAll,
            getById: getById
        };

        return service;

        ////////////////

        function getAll() {
        	return $http.get('localhost:52180/api/applications');
        }

        function getById() {

        }
    }
})();