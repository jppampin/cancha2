(function() {
  'use strict';

  angular
    .module('cancha2')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(userService, $mdSidenav) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.logout = userService.logout;
      vm.user = userService.currentUser;
      vm.toggleMenu = toggleMenu;
      vm.md5 = md5;

      function toggleMenu(){
        $mdSidenav('menu').toggle();
      }
    }


  }

})();
