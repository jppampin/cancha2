(function() {
  'use strict';
  var service;

  describe('Components:ListService', function(){
    beforeEach(module('cancha2'));

    beforeEach(inject(function(listService){
      service = listService;
    }));

    it('Should hava a list of players', function() {
      expect(service.players).toBeDefined();
    });

    it('Should an empty list of players', function  () {
      expect(service.players.length).toBe(0);
    });

  });
})();
