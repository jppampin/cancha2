(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('cancha2'));

    it('should exist the login controller', inject(function($controller) {
      var vm = $controller('ForgotPasswordController');

      expect(vm).toBeTruthy();
    }));
  });
})();
