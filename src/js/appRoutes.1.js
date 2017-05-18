angular.module('appRoutes', ['ui.router', 'ngCookies']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/files");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./src/templates/home.html"
    })
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
    })
    .state('groups', {
      url: "/groups",
      templateUrl: "./src/templates/login.html"
    });
})
  .run(function ($state, $rootScope, $location, $cookies, $http) {
    // // keep user logged in after page refresh
    // $rootScope.globals = $cookies.getObject('globals') || {};
    // if ($rootScope.globals.currentUser) {
    //   $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    // }

    // $rootScope.$on('$stateChangeStart', function (event, next, current, toState, toParams, fromState, fromParams) {
    //   // redirect to login page if not logged in and trying to access a restricted page
    //   var restrictedPage = $.inArray($state, ['login', 'register']) === -1;
    //   var loggedIn = $rootScope.globals.currentUser;
    //   if (restrictedPage && !loggedIn) {
    //     $state.go('login');
    //   }
    // });
  });