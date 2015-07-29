(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('paramUtils', paramUtils);

  /** @ngInject */
  function paramUtils() {

    var service = {
      serialize: serialize,
    };

    return service;

    function serialize(source) {
      var array = [];
    
      for(var key in source) {
         array.push(encodeURIComponent(key) + "=" + encodeURIComponent(source[key]));
      }
    
      return array.join("&");
    }
    
  }
})();
