/**
 * Created by jesus on 10/05/2016.
 */

(function(){

    'use strict';

    angular.module('app')
        .controller('cadastroMateriaPrimaController', cadastroMateriaPrimaController);

    function cadastroMateriaPrimaController(){

        var self = this;
        self.initcadastroMateriaPrima = initcadastroMateriaPrima;
        self.cadastrarMateriaPrima = cadastrarMateriaPrima;
        self.buscaUnidadesMateriaPrima = buscaUnidadesMateriaPrima;
        self.listaUnidades;


        function buscaUnidadesMateriaPrima(){
            self.listaUnidades = ['Kg','m']
        }

        function initcadastroMateriaPrima(){
            console.log('Aqui');
        }

        function cadastrarMateriaPrima(materiaPrima){
            console.log(materiaPrima)

        }







    }

})();