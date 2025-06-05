$(document).ready(function(){$("#owl-demo-product").owlCarousel({items:3,navigation:!0,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[480,1],autoPlay:5e3,stopOnHover:!1,itemsTabletSmall:!1})}),$(document).ready(function(){$("#owl-demo-client").owlCarousel({items:5,navigation:!0,itemsDesktop:[1199,5],itemsDesktopSmall:[979,5],itemsTablet:[768,5],itemsMobile:[480,1],autoPlay:5e3,stopOnHover:!1,itemsTabletSmall:!1})});


$(".js-accordion").click(function(e) {
e.preventDefault();
var $this = $(this);
$this.toggleClass("show")//add show to one which is clicked
$this.closest(".accordion").find(".js-accordion").not($this).removeClass("show")//remove from other
$this.next().slideToggle(350);//show accrodian
$this.closest(".accordion").find(".accordion__inner").not($this.next()).stop().slideUp(350);//slideup another
});
//Locations//
$(document).ready(function() {
$("#Locations").owlCarousel({
items : 5,
navigation : true,
itemsDesktop: [1199,4], 
itemsDesktopSmall:  [979,4] ,
itemsTablet:  [768,1] ,
itemsMobile:  [480,1] ,
autoPlay : 4000,
stopOnHover : false,
itemsTabletSmall: false,
});
});