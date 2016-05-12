function StaffController(){
  var vm = this;

  vm.name = 'Chris';
  vm.email = 'c@c.com';
  vm.phone = '12035556666';
}

angular
  .module('app')
  .controller('StaffController', StaffController);