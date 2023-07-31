$(document).ready(function() {
    $("#sidebarboxhide").click(function() {
        $("#sidebarbox").addClass("slideOutRight");
        setTimeout(function() {
            $("#sidebarbox").hide();
            $("#sidebarbox").removeClass("slideOutRight");
        }, 1000);
    });
});
  
  
  