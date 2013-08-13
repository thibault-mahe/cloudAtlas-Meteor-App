var Atlas = new Meteor.Collection('clouds');
	
//Template "cloudAtlas" : Return ALL the clouds for the final Atlas
Template.cloudAtlas.clouds = Atlas.find({});

Template.cloudAtlas.events = {
  	'click .remove': function () {
    	Atlas.remove(this._id);
  	}
};
	
//Template "cloudForm" : Add New Cloud
// Wait for a 'submit'
Template.cloudForm.events = {
	'submit' : function (e, tmpl) {
		e.preventDefault();
			
		//create the new cloud
		var newCloud = {
			cloudTitle: tmpl.find("#cloudTitle").value,
			cloudSubTitle: tmpl.find("#cloudSubTitle").value,
			cloudType: tmpl.find("#cloudType").value,
			cloudComment: tmpl.find("#cloudComment").value
		};
			
		//add the cloud to the database
		Atlas.insert(newCloud);
		
		// Reset the input fields
		$('#cloudTitle').val('');	
		$('#cloudSubTitle').val('');	
		$('#cloudType').val('');
		$('#cloudComment').val('');
				
		// Display a nice confirmation message
		$('.added').fadeIn('slow', function() {}).delay(1000).fadeOut('slow', function() {});
	
	}	
};
	
//Template "cloudSearch" : Return ALL the clouds to filter the selected ones
Template.cloudSearch.clouds = Atlas.find({});
	
//Filter the searched clouds
Meteor.startup(function() {
	$("#search-for-a-cloud").change(function(){
		$('.item').hide();
		$('.'+$(this).val()).show();
	});
	$("#all").click(function(){
		$('#atlas').slideToggle();
	});
});




