var Clouds = new Meteor.Collection('clouds');

Meteor.startup(function () {
   	//Clouds.remove({}); 

   	Clouds.allow({
  		insert: function (userId, doc) {
    		return true;
  		},
  		remove: function (userId, doc) {
    		return true;
  		}
	});
 });

