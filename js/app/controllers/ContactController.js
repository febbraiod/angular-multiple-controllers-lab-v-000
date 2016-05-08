function ContactController($scope){
  var vm = this;

  vm.name = 'Don!';
  vm.email = 'Something else!';
  vm.phone = 'Something else!';

  this.changeName = function(){
    vm.name = 'Meredith!';
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);