var moviesApplication = {};
moviesApplication.database = [];

moviesApplication.init = function(){
    moviesApplication.filterSlider();
    moviesApplication.getTypes();
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

    var types = [];

    $.each(moviesApplication.database, function(index, element){
        if($.inArray(moviesApplication.database[index].type, types)){
            var typeValue = moviesApplication.database[index].type;
        types.push(typeValue);
        $('#categories').append('<option value="'+typeValue+'">'+typeValue+'</option>');
        }
        

        
    });
};



moviesApplication.loadAssets();