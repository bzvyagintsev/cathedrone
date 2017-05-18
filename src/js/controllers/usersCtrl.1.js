(function () {
    'use strict';

    angular
        .module('FileManagerApp')
        .controller('usersCtrl', usersCtrl);

    usersCtrl.$inject = ['UserService', '$rootScope'];
    function usersCtrl(UserService, $rootScope) {

    var vm = this;
    vm.allUsers = [];

    vm.pageTitle = 'РАБОТАЕТ';

    loadAllUsers();

    function loadAllUsers() {
        UserService.GetAll()
            .then(function (users) {
                vm.allUsers = users;
            });
    };

    // UserService.GetAll()
    //     .then(function (users) {
    //         $scope.users = users;
    //     });

    // $scope.createUser = function () {

    //     alert('OK 1');

    //     var userData = {
    //         username: $scope.username,
    //         password: $scope.password
    //     };

    //     UserService.Create(userData).then(function () {
    //         User.get().then(function (users) {
    //             $scope.users = users.data;
    //         });
    //     }, function (response) {
    //         alert(response.data.errmsg);
    //     });
    // };

  }

})();