import angular from "angular";
import { ProductService } from "./services/productService";
import { ProductController } from "./controllers/productController";
import { RegisterController } from "./controllers/registerController";
import { LoginController } from "./controllers/loginController";
import { LogoutController } from "./controllers/logoutController";
import { HomeController } from "./controllers/homeController";
import ngRoute from "angular-route";

const app = angular.module("ecommerceApp", ["ngRoute"]);

app.service("ProductService", ProductService);
app.controller("ProductController", ProductController);
app.controller("RegisterController", RegisterController);
app.controller("LoginController", LoginController);
app.controller("LogoutController", LogoutController);
app.controller("HomeController", HomeController);

interface IRouteProvider extends angular.route.IRouteProvider { }

app.config([
  "$routeProvider",
  function ($routeProvider: IRouteProvider) {
    $routeProvider
      .when("/products", {
        templateUrl: "views/products.html",
        controller: "ProductController",
      })
      .when("/register", {
        templateUrl: "views/register.html",
        controller: "RegisterController",
      })
      .when("/login", {
        templateUrl: "views/login.html",
        controller: "LoginController",
      })
      .when("/logout", {
        templateUrl: "views/logout.html",
        controller: "LogoutController",
      })
      .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController"
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);