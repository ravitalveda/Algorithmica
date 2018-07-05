var app = angular.module("studentsPortal", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "partials/home.html",
      controller: "homeController"
    })
    .when("/company", {
      templateUrl: "partials/home/home-about.html",
      controller: "homeController"
    })
    .when("/vision", {
      templateUrl: "partials/home/home-vision.html",
      controller: "homeController"
    })
    .when("/whyalgs", {
      templateUrl: "partials/home/home-why.html",
      controller: "homeController"
    })
    .when("/consulting", {
      templateUrl: "partials/consulting.html",
      controller: "homeController"
    })
    .when("/courses", {
      templateUrl: "partials/courses.html",
      controller: "homeController"
    })
    .when("/aboutus", {
      templateUrl: "partials/aboutus.html",
      controller: "homeController"
    })
    .when("/demo", {
      templateUrl: "partials/askdemo.html",
      controller: "homeController"
    })
    .otherwise({
      redirectTo: "/home"
    })
});