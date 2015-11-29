Parties = new Mongo.Collection("parties");

if (Meteor.isClient){
    angular.module("socially", ["angular-meteor"])
        .controller("PartiesListCtrl", function($scope, $meteor) {
        $scope.parties = $meteor.collection(Parties);
    });
}