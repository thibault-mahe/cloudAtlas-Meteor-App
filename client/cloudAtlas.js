var Clouds = new Meteor.Collection('clouds');
	
	// Return ALL the clouds for the final Atlas
	Template.cloudAtlas.clouds = function(){
		return Clouds.find({});
	}
	//Give the possibility of removing clouds
	Template.cloudAtlas.events = {
  		'click .remove': function () {
    		Clouds.remove(this._id);
  		}
	};
	
	//Add New Cloud
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
				Clouds.insert(newCloud);
		
			// Reset the input fields
				$('#cloudTitle').val('');	
				$('#cloudSubTitle').val('');	
				$('#cloudType').val('');
				$('#cloudComment').val('');
				
			// Display a nice confirmation message
				$('.added').fadeIn('slow', function() {}).delay(1000).fadeOut('slow', function() {});
	
		}	
	};
	
	// Return ALL the clouds to filter the selected ones
	Template.cloudSearch.clouds = function(){		
			return Clouds.find({});
	}
	
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




