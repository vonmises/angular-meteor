Parties = new Mongo.Collection("parties");

if (Meteor.isServer){
    Meteor.startup(function (){
        if (Parties.find().count() === 0 ) {
            var parties = [            
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
            for (var i = 0; i < parties.length; i++){
                Parties.insert(parties[i]);
            }
        }
    });
}