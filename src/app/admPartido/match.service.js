(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('matchService', matchService);

  /** @ngInject */
  function matchService($log, $resource, $http) {
    var players =  [];
    var matchApi = $resource('/api/match');

    var service = {
      addMatch : addMatch 
    };

    init();

    return service;

    function init(){
    }

    function addMatch(match) {
      var newMatch = new matchApi();
      newMatch.title = match.title;
      return newMatch.$save();
      // return $http({
      //   method: 'POST',
      //   url: '/api/match',
      //   data: match,
      //   headers: { 'Content-Type': 'application/json' }
      // });      
    }
  }
})();
