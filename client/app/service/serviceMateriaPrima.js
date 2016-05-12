/**
 * Created by jesus on 11/05/2016.
 */


(function(){

    'use strict';

    angular
        .module('app')
        .factory('materiaPrimaService', materiaPrimaService);

    materiaPrimaService.$inject = ['$http','$location'];

    function materiaPrimaService($http) {

        var API_ROUTE_CADASTRARMATERIALPRIMA = '/api/cadastrarmateriaprima/';
        var API_ROUTE_EXCLUIRMATERIAPRIMA = '/api/excluirmateriaprima';


        var service = {
            cadastrar: cadastrar,
            excluir: excluir

        };
        return service;

        function cadastrar(data) {
            return $http.post(API_ROUTE_CADASTRARMATERIALPRIMA, data);
        }

        function excluir(data) {
            return $http.post(API_ROUTE_EXCLUIRMATERIAPRIMA, data);
        }


    }


})();