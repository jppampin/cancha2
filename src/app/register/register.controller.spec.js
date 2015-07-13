(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('cancha2'));

    it('should exist the login controller', inject(function($controller) {
      var vm = $controller('RegisterController');
      expect(vm.user.name).toBe('');
      expect(vm.user.email).toBe('');
      expect(vm.user.username).toBe('');
      expect(vm.user.password).toBe('');
      expect(vm.user.confirmPassword).toBe('');
      expect(vm).toBeTruthy();
    }));
  });
})();

