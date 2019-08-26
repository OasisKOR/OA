$(document).ready(function(){
   var coverHeight = $('.cover-view').height()
   console.log('overHeight');

 $(window).scroll(function(){
   var sct = $(this).scrollTop();


if(sct > coverHeight){

   $('.gnb').css('position','fixed').addClass('sub-design')
}else if(sct < coverHeight){
  $('gnb').css('position','absolute').removeClass('sub-design')

}
})

})
