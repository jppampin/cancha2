(function() {
  'use strict';
  var template;
  var controller;
  var element;

  describe('Components:CanchaList', function(){
    beforeEach(module('cancha2'));

    beforeEach(inject(function($compile, $rootScope, $controller){
      // var $scope = $rootScope.$new();
      controller = $controller('CanchaListController');
      // element = angular.element('<cancha-list />');
      // template = $compile(element)($scope);
      // $scope.$digest();

    }));

    it('should exist the Cancha List controller', inject(function($compile, $rootScope) {
      expect(controller).toBeTruthy();
    }));

    it('should have a list of players', inject(function($compile, $rootScope) {
      expect(controller.players).toBeTruthy();
      expect(controller.players.length).toBe(4);
    }));
  });
})();
