 var max = 0;
 var max_2 = 0;
 $(document).ready(function () {
   if ($(window).width() > 1000) {

     $("#VT-Hacks").children(".col-md-4").each(function () {
       if ($(this).height() > max) {
         max = $(this).height()
       }
     });
     $("#VT-Hacks").children(".col-md-4").each(function () {
       $(this).height(max);
     });

     var width = $(window).width();
     $(window).resize(function () {
       if ($(this).width() != width) {
         max = 0;
         width = $(this).width();
         $("#VT-Hacks").children(".col-md-4").each(function () {
           $(this).height(0);
           if ($(this).height() > max) {
             max = $(this).height()
           }
         });
         $("#VT-Hacks").children(".col-md-4").each(function () {
           $(this).height(max);
         });
       }
     });
   }

   if ($(window).width() > 1000) {

     $("#CafeConnect").children(".col-md-4").each(function () {
       if ($(this).height() > max_2) {
         max_2 = $(this).height()
       }
     });
     $("#CafeConnect").children(".col-md-4").each(function () {
       $(this).height(max_2);
     });

     var width_2 = $(window).width();
     $(window).resize(function () {
       if ($(this).width() != width_2) {
         max_2 = 0;
         width_2 = $(this).width();
         $("#CafeConnect").children(".col-md-4").each(function () {
           $(this).height(0);
           if ($(this).height() > max_2) {
             max_2 = $(this).height()
           }
         });
         $("#CafeConnect").children(".col-md-4").each(function () {
           $(this).height(max_2);
         });
       }
     });
   }

   if ($(window).width() > 1000) {
     $("#app").height($("#falling").height());

     $(window).resize(function () {
       $("#app").height($("#falling").height());
     });
   }
 });