(function() {
  'use strict';

  angular
    .module('cancha2')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('teal');

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
