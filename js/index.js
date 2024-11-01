let boxmenu = $(".menu").outerWidth(true);
let sidebar = false;
// console.log(boxmenu)

console.log("moaz")
$(".menubar").on("click", function ()
{
    openbar()
})
$(".close").on("click",function(){
    closebar()
})
function closebar (){
    if(sidebar === true){

        $(".one").animate({left : `0px`},500)
        
       
        // console.log("moiaz")
        sidebar=false ;
    }
    
}
function openbar() {
    if (sidebar === false)
        {
            $(".one").animate({left : `${boxmenu}px`},500)
            
            // $("li").animate()
            // console.log("moiaz")
            sidebar=true ;
        }
}

//! 
$(".second  h2 ").on("click",function (e){
    // console.log(this)
    $(this).next().slideToggle(700)
    $(".second p").not($(this).next()).slideUp(700)
})

//!


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `<h2 class="border border-2 text-white px-5 py-4">${days}D</h2>
                        <h2 class="border border-2 px-5 py-4 text-white">${hours} h</h2>
                        <h2 class="border border-2 px-5 py-4 text-white">${minutes} m </h2>
                        <h2 class="border border-2 px-5 py-4 text-white">${seconds} s</h2>`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//!

$("textarea").on("keyup", function(){
    let length = $(this).val().length
    $(".num").text(
        100 - length <= 0 ? "your available character finished " : 100 - length 
    )
})

//!

$(".menu li a").on("click", function(){
    let current = $(this).attr("href");
    let toGo = $(current).offset().top;
    $("html,body").animate( {scrollTop : toGo } , 3000)
    console.log(current)
})