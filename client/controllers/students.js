var app = angular.module('app');

app.controller('StudentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

  //Getting All Students
  $scope.getStudents = function(){
    $http.get('/api/students').then(function(response){
      $scope.students = response.data;
    });
  }

  //Getting Single Student by ID
  $scope.getStudent = function(){
    var id = $routeParams.id;
    $http.get('/api/students/'+id).then(function(response){
      $scope.student = response.data;
    });
  }

  //Adding New Student
  $scope.addStudent = function(){
    console.log($scope.student);
    $http.post('/api/students/', $scope.student).then(function(response){
      window.location.href="#/students"
    });
  }

  //Editing Details of Students
  $scope.editStudent = function(){
    console.log($scope.student);
    var id = $routeParams.id;
    $http.put('/api/students/'+id, $scope.student).then(function(response){
      window.location.href="#/students"
    });
  }

  //Deleting Students Info
  $scope.deleteStudent = function(id){
    $http.delete('/api/students/'+id).then(function(response){
      window.location.href="#/students"
    });
  }
}]);