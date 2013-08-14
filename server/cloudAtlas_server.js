var Atlas = new Meteor.Collection('clouds');

Meteor.startup(function () {
	//Remove all clouds
	//Clouds.remove({}); 
	
	//Insert / Remove specific cloud
	Atlas.allow({
  		insert: function (userId, doc) {
    			return true;
  		},
  		remove: function (userId, doc) {
    			return true;
  		}
	});
 });

