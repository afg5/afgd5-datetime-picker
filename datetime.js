//(function($) {
//  $(document).live('acf/setup_fields', function(e, div){

//	  // div is the element with new html.
//	  // on first load, this is the $('#poststuff')
//	  // on adding a repeater row, this is the tr
//    var start_field_name = 'fields[field_59644a2aca53f]';
//    var end_field_name = 'fields[field_59644bbeca540]';
//	  $(div).find('input[name='+start_field_name+']').each(function(){

//		  $(this).on('input change select',function(e){
//		    var date = $(this).datepicker('getDate');
//		    alert(date);
//		  });

//	  });

//  });
//})(jQuery);	

//window.onload = function() {
//    if (window.jQuery) {  
//        // jQuery is loaded  
//        alert("Yeah!");
//    } else {
//        // jQuery is not loaded
//        alert("Doesn't Work");
//    }
//}

jQuery(document).ready(function($) {
console.log("inside");
// stage
//    var start_field_name = 'fields[field_59644a2aca53f]';
//    var end_field_name = 'fields\\[field_59644bbeca540\\]';
//local1
    var start_field_name = 'fields[field_59717cbdb7ad5]';
    var end_field_name = 'fields[field_59717cd8b7ad6]';
    console.log("length div="+jQuery('div').length);
//    console.log("length="+$("input").length);
    console.log("lengthTitle="+jQuery("input[name='"+start_field_name+"']").length);
    $("input[name='"+start_field_name+"']").each(function(){
      console.log("added");
		  $(this).on('input change select',function(e){
		    var date = $(this).datepicker('getDate');
		    console.log(date);
		    date.setHours(date.getHours()+1);
		    $("input[name='"+end_field_name+"']").each(function(){
		      console.log("updating end");
		      $(this).datetimepicker('setDate',date);
		    });
		  });
    });
});	
