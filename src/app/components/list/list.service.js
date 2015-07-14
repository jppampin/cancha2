(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('listService', listService);

  /** @ngInject */
  function listService($log, $http) {
    var players =  [
      { 'name' : 'JPP', 'email' : 'jppampin@gmail.com', 'comment': 'First User', 'confirm' : false},
      { 'name' : 'JPP2', 'email' : 'jppampin@gmail.com', 'comment': 'Second User', 'confirm': false},
      { 'name' : 'JPP3', 'email' : 'jppampin@gmail.com', 'comment': 'Third User', 'confirm' : true},
      { 'name' : 'JPP4', 'email' : 'jppampin@gmail.com', 'comment': 'Fourth User', 'confirm': true}
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
