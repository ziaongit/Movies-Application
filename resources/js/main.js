var moviesApplication = {};
moviesApplication.database = [];

moviesApplication.init = function(){
    moviesApplication.filterSlider();
    moviesApplication.getTypes();
    moviesApplication.getDirectors();
    moviesApplication.generateMarkup();
};

moviesApplication.loadAssets = function(){
	$.getJSON('resources/database/movies.json', function(data){
		moviesApplication.database = data;
		moviesApplication.init();
	});
};

moviesApplication.filterSlider = function(){
    $('.filter.open').on('click', function(){
        $('.filter_container').slideToggle(300, function(){
            var button = $(this).prev();

            if(button.hasClass('active')){
                $('.filter.open').find('.btn_title').text('Filter By');
                button.removeClass('active');
            }else {
                $('.filter.open').find('.btn_title').text('Close');
                button.addClass('active');
            }
        });
    });
};

moviesApplication.getTypes = function(){
    var db = moviesApplication.database;
    var categoriesArray = [];
    $.each(db, function(index, element){
        if($.inArray(db[index].type, categoriesArray)){
            var categoryValue = db[index].type;
        categoriesArray.push(categoryValue);
        $('#categories').append('<option value="'+categoryValue+'">'+categoryValue+'</option>');
        }   
    });
};

moviesApplication.getDirectors = function(){
    var db = moviesApplication.database;
    var directorsArray = [];
    $.each(db, function(index, element){
        if($.inArray(db[index].director, directorsArray)){
            var directorValue = db[index].director;
        directorsArray.push(directorValue);
        $('#directors').append('<option value="'+directorValue+'">'+directorValue+'</option>');
        }   
    });
};

moviesApplication.generateMarkup = function(){
    
    var template = '';
    
    $.each(moviesApplication.database, function(index){

        var db = moviesApplication.database;
        
        template +='<div class="movie_item">';
        template += '<div class="header">';
        template +=   '<div class="left">';
        template +=     '<img src="resources/images/movies/'+db[index].img+'">';
        template +=   '</div>';
        template +=   '<div class="right">';
        template +=     '<h3>'+db[index].title+'</h3>';
        template +=     '<div class="node">';
        template +=      '<span>Year:</span> '+db[index].year+'';
        template +=     '</div>';
        template +=     '<div class="node">';
        template +=         '<span>Director:</span> '+db[index].director+'';
        template +=     '</div>';
        template +=     '<div class="node">';
        template +=         '<span>Category:</span> '+db[index].type+'';
        template +=     '</div>';
        template +=     '<div class="show_decs">See Description</div>';
        template +='    </div>';
        template +='  </div>';
        template +='  <div class="description">';
        template +=     '<strong>Description:</strong> '+db[index].desc+'';
        template +='  </div>';
        template +='</div>';
    });
    $('.movies_content').append(template);
};


moviesApplication.loadAssets();