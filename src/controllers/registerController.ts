import * as angular from 'angular';

interface IRegisterScope extends angular.IScope {
  user: any;
  register: () => void;
}

export class RegisterController {
  static $inject = ["$scope"];
  constructor(private $scope: IRegisterScope) {
    this.$scope.user = {};
    this.$scope.register = this.register.bind(this);
  }

  register() {
    const user = this.$scope.user;
    if (user.username && user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      alert("User registered successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  }
}