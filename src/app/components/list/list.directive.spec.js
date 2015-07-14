(function() {
  'use strict';
  var template;
  var controller;
  var element;

  describe('Components:CanchaList', function(){
    beforeEach(module('cancha2'));

    beforeEach(inject(function($compile, $rootScope, $controller){
      controller = $controller('CanchaListController');

    }));

    it('should exist the Cancha List controller', inject(function($compile, $rootScope) {
      expect(controller).toBeDefined();
    }));

    it('should have a list of players', inject(function($compile, $rootScope) {
      expect(controller.players).toBeDefined();
      expect(controller.players.length).toBe(4);
    }));
  });
})();
