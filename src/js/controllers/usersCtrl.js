angular.module('FileManagerApp').controller('usersCtrl', ['UserService', '$rootScope', 'apiMiddleware', 'fileNavigator', function (UserService, $rootScope, ApiMiddleware, FileNavigator) {

    var vm = this;
    vm.allUsers = [];
    vm.user = null;

    vm.fileNavigator = new FileNavigator();

    loadAllUsers();
    loadCurrentUser();

    function loadAllUsers() {
        UserService.GetAll()
            .then(function (users) {
                vm.allUsers = users;
            });
    };

    function loadCurrentUser() {
        UserService.GetByUsername($rootScope.globals.currentUser.username)
            .then(function (user) {
                vm.user = user;
            });
    }

    vm.createUser = function () {

        var userData = {
            username: vm.username,
            password: vm.password,
            group: vm.group
        };

        UserService.Create(userData).then(function () {
            loadAllUsers();
            console.log('User created');

            UserService.GetByUsername(vm.username).then(function (user) {
                createUserFolder(user);
            });

        }, function (response) {
            alert(response.data.errmsg);
        });
    };

    vm.deleteUser = function (id) {
        UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
    }


    function createUserFolder(username) {

        vm.apiMiddleware = new ApiMiddleware();
        vm.apiMiddleware.createUserFolder(username).then(function (response) {
            console.log('Folder created');
            vm.fileNavigator.refresh(); // Нужно изменять настоящий объект, а не его копию
        }, function (response) {
            alert(response);
        });;
    };

}]);