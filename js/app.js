(function(){

	var app = angular.module('App',[]);

    app.directive('menuTabs', function MenuTabsCreate () {

        return {
            restrict: 'E',
            templateUrl: 'templates/tabs.html',
            controllerAs: 'tc',
            controller: function MenuTabsController () {
                this.tab = 1;

                this.setTab = function setTab (tab) {
                    this.tab = tab;
                };

                this.activeTab = function activeTab (tab) {
                    return this.tab === tab;
                };
            }
        };

    });

    app.controller('AppController', ['$http', function AppContollerConstructor ($http) {

        this.nome = 'HUEHUEHE';

        this.pessoas = [
            { nome: 'Rubens',   sobrenome: 'Fernando', ativo: true  },
            { nome: 'William',  sobrenome: 'Crawley',  ativo: true  },
            { nome: 'Reinaldo', sobrenome: 'Rauch',    ativo: false }
        ];

        this.linhas = [];

        var _this = this;

        $http.get('http://reinaldorauch.tk/api/horarios')
            .success(function onSuccess (data) {
                _this.linhas = data;
            }).error(function onError (err) {
                console.log(err);
            });

        this.click = function click (texto) {
            alert(texto);
        };

        this.imgShow = function imgShow (msg) {
            return /wa+t/.test(msg);
        };



    }]);


})();
