(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('listService', listService);

  /** @ngInject */
  function listService($log, $http) {
    var players =  [
      { user : {'name' : 'JPP', 'email' : 'jppampin@gmail.com' , 'isAdmin' : true }, 'confirm': false},
      { user : {'name' : 'JPP2', 'email' : 'jppampin@gmail.com', 'isAdmin ': false }, 'confirm': false},
      { user : {'name' : 'JPP3', 'email' : 'jppampin@gmail.com', 'isAdmin' : false }, 'confirm': true},
      { user : {'name' : 'JPP4', 'email' : 'jppampin@gmail.com', 'isAdmin' : false  }, 'confirm': true}
    ];

    var service = {
      players: players,
      addPlayer : addPlayer
    };

    return service;

    function addPlayer(player) {
      players.push(player);
    }
  }
})();
