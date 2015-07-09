(function() {
  'use strict';

  angular
    .module('cancha2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
