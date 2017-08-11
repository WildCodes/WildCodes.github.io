 var config = {
    apiKey: "AIzaSyDKMQuRF6fUZuCAmG_k36CGBtBIDlYRDbQ",
    authDomain: "odampodams-fil.firebaseapp.com",
    databaseURL: "https://odampodams-fil.firebaseio.com",
    projectId: "odampodams-fil",
    storageBucket: "",
    messagingSenderId: "733414853868"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  });

  app.controller("KommentarCtrl", function($scope, kommentarer) {
  	$scope.kommentarer = kommentarer;

  	$scope.kommentar = {
  		text: "", 
  		skribent: ""
  	}

  		$scope.addComment = function() {
  			$scope.kommentarer.$add($scope.kommentar);

  			$scope.kommentar = {
  				text: "",
  				skirbent: ""
  			}
  		}

  });