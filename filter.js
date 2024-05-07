var fActive = '';
 
function filterColor(color){
 if(fActive != color){
 $('li.projects__item').filter('.'+color).slideDown();
 $('li.projects__item').filter(':not(.'+color+')').slideUp();
 fActive = color;
 }
}
 
$('.f-public').click(function(){ filterColor('public'); });
$('.f-street').click(function(){ filterColor('street'); });
$('.f-interior').click(function(){ filterColor('interior'); });
 
$('.f-all').click(function(){
 $('li.projects__item').slideDown();
 fActive = 'all';
});