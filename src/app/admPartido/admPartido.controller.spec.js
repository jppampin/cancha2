(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('cancha2'));

    it('should exist the admPartido controller', inject(function($controller) {
      var vm = $controller('AdmPartidoController');

      expect(vm).toBeTruthy();
    }));
  });
})();
