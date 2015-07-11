(function() {
  'use strict';

  angular
    .module('cancha2')
    .directive('disqus', disqus);

  /** @ngInject */
  function disqus() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/disqus/disqus.html',
      scope: {},
      controller: DisqusController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DisqusController() {
    }
  }

})();
