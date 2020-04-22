$(document).ready(function() {
    $(".slike").click(function() {
          $(".golija").hide();
            $(".jezero").show();
      });
      $(".slike1").click(function() {
          $(".jezero").hide();
            $(".banja").show();
      }); 
  $(".pocetak").click(function() {
          $(".jezero,.banja").hide();
            $(".golija").show();
  });		

});
