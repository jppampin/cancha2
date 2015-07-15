(function() {
  'use strict';
  var service;

  describe('controllers', function(){

    beforeEach(module('cancha2'));

    beforeEach(inject(function  (userService) {
      service = userService;
    }));

    it('should have a currentUser instance', inject(function(userService) {
      expect(service).toBeDefined();
      expect(service.currentUser).toBeDefined();
    }));


    it('should have an anonymous user as default', inject(function(userService) {
      expect(userService.currentUser.username).toBe('anonymous');
    }));

    it('should have a login operation', inject(function(userService) {
      expect(userService.login).toBeDefined();
    }));

    it('should have a logout operation', inject(function(userService) {
      expect(userService.logout).toBeDefined();
    }));

  });
})();

