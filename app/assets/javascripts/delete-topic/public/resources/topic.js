(function() {
  'use strict';

  angular.module('public.resource.topic', ['ngResource'])
  .factory("Topic", [
    '$resource', function($resource) {
      return $resource("/api/public/topics/:id.json", {
        id: "@id"
      },{
        update: { method: 'PUT' }
      });
  }]);
})();