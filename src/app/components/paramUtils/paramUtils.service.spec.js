(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('cancha2'));

    it('should exist the githubContributorService controller', inject(function(githubContributor) {
      expect(githubContributor).toBeDefined();
      expect(githubContributor.getContributors).toBeDefined();
    }));

    it('should have a property api host', inject(function(githubContributor) {
      expect(githubContributor.apiHost).toBeDefined();
      expect(githubContributor.apiHost).toBe('https://api.github.com/repos/Swiip/generator-gulp-angular')
    }));
  });
})();
