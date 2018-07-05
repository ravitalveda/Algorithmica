app.controller("homeController", ["$scope", "$http", function($scope, $http) {

    $('.carousel').carousel();
    //home page main slider
    var $myCarousel = $('#carousel-example-generic');
    $("#carousel-example-generic a.right").click(function(e) {
        var index = $(this).index();
        //when hitting NEXT button index always 2, for PREV - 0
        $myCarousel.carousel(index);
        e.preventDefault();
    });

    var tmpFix = 2;
    $("#carousel-example-generic a.left").click(function(e) {
        var index = $(this).index();
        //when hitting NEXT button index always 2, for PREV - 0
        tmpFix++;
        if (tmpFix == 2)
            tmpFix = 0;
        $myCarousel.carousel(tmpFix);
        e.preventDefault();
    });

    //home page testimonal slider

    var index2 = 0;
    var $testimonalCarousel = $('#myCarousel');
    $("#myCarousel a.right-btn").click(function(e) {
        var index = $(this).index();
        //when hitting NEXT button index always 2, for PREV - 0
        index2++;
        if (index2 > 4)
            index2 = 0;
        $testimonalCarousel.carousel(index2);
        e.preventDefault();
    });

    // var index2 = 0;
    $("#myCarousel a.left-btn").click(function(e) {
        var index = $(this).index();
        //when hitting NEXT button index always 2, for PREV - 0
        index2--;
        if (index2 < 0)
            index2 = 4;
        $testimonalCarousel.carousel(index2);
        e.preventDefault();
    });

    //request for a demo 
    $scope.fnRequestDemo = function() {
        var dataObj = {
            "firstname": $scope.firstname,
            "lastname": $scope.lastname,
            "email": $scope.email,
            "company": $scope.company,
            "message": $scope.message
        };
        var res = $http.post('http://deepalgorithms.in/askdemo.php', dataObj);
        res.success(function(data, status, headers, config) {
            $scope.firstname = "";
            $scope.lastname = "";
            $scope.email = "";
            $scope.company = "";
            $scope.message = "";

        });
        // res.error(function(data, status, headers, config) {
        //   alert("failure message: " + JSON.stringify({
        //     data: data
        //   }));
        // });
    };

    //Contact US 
    $scope.fnContactUs = function() {
        var dataObj = {
            "contactname": $scope.contactname,
            "contactemail": $scope.contactemail,
            "contactnumber": $scope.contactnumber,
            "contactmessage": $scope.contactmessage,
        };
        var res = $http.post('http://deepalgorithms.in/contactus.php', dataObj);
        res.success(function(data, status, headers, config) {
            $scope.contactname = "";
            $scope.contactemail = "";
            $scope.contactnumber = "";
            $scope.contactmessage = "";
        });
        // res.error(function(data, status, headers, config) {
        //   alert("failure message: " + JSON.stringify({
        //     data: data
        //   }));
        // });
    };
    
    //SubscribeUs 
    $scope.fnSubscribeUs = function() {
        var dataObj = {
            "subscribeemail": $scope.subscribeemail
        };
        var res = $http.post('http://deepalgorithms.in/newsletter.php', dataObj);
        res.success(function(data, status, headers, config) {
            $scope.subscribeemail = "";
        });
        // res.error(function(data, status, headers, config) {
        //   alert("failure message: " + JSON.stringify({
        //     data: data
        //   }));
        // });
    };

}]);