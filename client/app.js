var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.hashPrefix('');

  $routeProvider.when('/', {
    controller:'StudentsController',
    templateUrl:'views/students.html'

  })
  .when('/students', {
    controller:'StudentsController',
    templateUrl:'views/students.html'

  })
  .when('/students/info/:id', {
    controller:'StudentsController',
    templateUrl:'views/student_info.html'

  })
  .when('/students/add', {
    controller:'StudentsController',
    templateUrl:'views/add_student.html'

  })
  .when('/students/edit/:id', {
    controller:'StudentsController',
    templateUrl:'views/edit_student.html'

  })
  .otherwise({
    redirectTo:'/'
  });
}]);