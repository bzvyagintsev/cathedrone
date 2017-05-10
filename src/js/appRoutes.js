angular.module('appRoutes', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/files");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "./src/templates/login.html"
    })
    .state('files', {
      url: "/files",
      templateUrl: "./src/templates/files.html"
    })
    .state('users', {
      url: "/users",
      templateUrl: "./src/templates/users.html"
    });
});