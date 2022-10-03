//found a way to display date here https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
document.getElementById("currentDay").innerHTML = today;


$(document).ready(function() {
    $(".saveBtn").on("click", function() {
       var value = $(this).siblings('.description').val();
       var time = $(this).parent().attr('id');
       localStorage.setItem(time, value);
$('.notification').addClass('show')
 
setTimeout(function() {
    $('.notification').removeClass('show');
    });

   })

   function hourNow() {
       var currentTime = moment().hours();
    
        $(".time-block").each(function() {
        var blockHour= parseInt($(this).attr('id').split('-')[1]);
           if(blockHour < currentTime) {
               $(this).addClass("past");
           } else if(blockHour === currentTime) {
               $(this).removeClass("past");
               $(this).addClass("present")
           } else{
               $(this).removeClass("past");
               $(this).removeClass("present");
               $(this).addClass("future");
           }
   
       })
   }
  
   hourNow()
   var interval = setInterval(hourNow)

   $('#hour-1 .description').val(localStorage.getItem('hour-1'))
   $('#hour-2 .description').val(localStorage.getItem('hour-2'))
   $('#hour-3 .description').val(localStorage.getItem('hour-3'))
   $('#hour-4 .description').val(localStorage.getItem('hour-4'))
   $('#hour-5 .description').val(localStorage.getItem('hour-5'))
   $('#hour-6 .description').val(localStorage.getItem('hour-6')) 
   $('#hour-7 .description').val(localStorage.getItem('hour-7'))
   $('#hour-8 .description').val(localStorage.getItem('hour-8'))
   $('#hour-9 .description').val(localStorage.getItem('hour-9'))
   $('#hour-10 .description').val(localStorage.getItem('hour-10'))

});




