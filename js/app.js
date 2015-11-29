if (Meteor.isClient){
    angular.module("socially", ["angular-meteor"])
        .controller(
        "PartiesListCtrl", function($scope){
        $scope.parties = [
            {
                name: "dubstep-free zone",
                description: "can we please just for an evening not listen to dubstep"
            },
            {
                name: "all dubstep all the time",
                description: "get it on!"
            },
            {
                name: "savage lounging",
                description: "leisure suit required. and only fiercest manners"
            }
        ];
    });
}