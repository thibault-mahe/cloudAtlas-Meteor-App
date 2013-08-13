var Atlas = new Meteor.Collection('clouds');

Meteor.startup(function () {
   	//Clouds.remove({}); 

   	Atlas.allow({
  		insert: function (userId, doc) {
    		return true;
  		},
  		remove: function (userId, doc) {
    		return true;
  		}
	});
 });

