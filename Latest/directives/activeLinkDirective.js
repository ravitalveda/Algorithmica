app.directive("myActiveLink", function($location) {

  return {
    restrict: "A",
    scope: {
      path: "@myActiveLink"
    },
    link: function(scope, element, attrs) {
      scope.$on("$locationChangeSuccess", function() {
        if ($location.path() == scope.path) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      })
    }
  }

});