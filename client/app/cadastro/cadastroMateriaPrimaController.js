/**
 * Created by jesus on 10/05/2016.
 */

(function(){

    'use strict';

    angular.module('app')
        .controller('cadastroMateriaPrimaController', cadastroMateriaPrimaController);

    function cadastroMateriaPrimaController(toastApp){

        var self = this;
        self.initcadastroMateriaPrima = initcadastroMateriaPrima;
        self.cadastrarMateriaPrima = cadastrarMateriaPrima;
        self.buscaUnidadesMateriaPrima = buscaUnidadesMateriaPrima;
        self.excluirMateriaPrima = excluirMateriaPrima;
        self.listaUnidades;
        self.isBtnRemoveMateriaPrima = false;
        self.materiaprima = {};



        function buscaUnidadesMateriaPrima(){
            self.listaUnidades = ['Kg','m']
        }

        function initcadastroMateriaPrima(){
            console.log('Aqui');

        }


        function excluirMateriaPrima(materiaPrima){
            console.log(materiaPrima);
            toastApp.newmessage('Removido a Materia Prima com o SKU.' + materiaPrima.sku);
            self.isBtnRemoveMateriaPrima = false;
            self.materiaprima = {
                nome: "",
                sku: "",
                unidade: "",
                observacao: ""
            };


        }
        function cadastrarMateriaPrima(materiaPrima){
            toastApp.newmessage('Cadastro realizado com sucesso para o SKU.' + materiaPrima.sku);
            console.log(materiaPrima);
            self.isBtnRemoveMateriaPrima = true;
        }







    }

})();