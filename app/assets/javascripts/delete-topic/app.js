( function() {
  'use strict';

  angular.module('delete-topic', [
    // Libraries
    'templates',
    'ngRoute',
    
    // Resource
    'public.resource.topic',

    // Controllers
    'public.ctrl.topicListCtrl',
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'delete-topic/public/topic-list/topic-list.html'
        });    

    }
  ]);

  

})();