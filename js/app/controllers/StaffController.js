function StaffController($scope){
  this.name = 'Chris';
  this.email = 'c@c.com';
  this.phone = '12035556666';
}

angular
  .module('app')
  .controller('StaffController', StaffController);