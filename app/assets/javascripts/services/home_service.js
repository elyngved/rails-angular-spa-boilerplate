angular.module('app.services.home', ['ngResource'])

.factory('HomeService', ['$resource', function($resource) {
  return $resource(
    '/api/home/:action:format',
    { format: '.json' },
    {
      'welcome': { method: 'GET', params: { action: 'welcome' } }
    }
  )
}])