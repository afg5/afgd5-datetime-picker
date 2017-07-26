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
    var start_slug = "start_date";
    var end_slug = "end_date";

	  RegExp.escape = function(text) {
      if (!arguments.callee.sRE) {
        var specials = [ 
          '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\' 
        ];
        arguments.callee.sRE = new RegExp(
          '(\\' + specials.join('|\\') + ')', 'g'
        );
      }
      return text.replace(arguments.callee.sRE, '\\$1');
    }    
//    $("input[name='"+start_field_name+"']").each(function(){
//    console.log("feld div len="+$("div[data-field_name='"+RegExp.escape(start_slug)+"'] input").length);
    $("div[data-field_name='"+RegExp.escape(start_slug)+"'] input").first().each(function(){
//      console.log("added");
	    $(this).after('<input type="checkbox" checked id="link_'+start_slug+'"/>Link '+start_slug+' and '+end_slug+' changes.').on('input change select',function(e){
	      link_box_id = '#link_'+RegExp.escape(start_slug); //.replace(/#$%&'()*+,./:;<=>?@[\]^``{|}~/g,"\\$&");
//		    console.log("num checkbox="+$(link_box_id).length+$(link_box_id).is(':checked'));
	      if( $(link_box_id).is(':checked') ){
	        var date = $(this).datetimepicker('getDate');
//		      console.log(date);
	        date.setHours(date.getHours()+1);
	        //date.setTime(date.getTime()+1000*60*60);
//		      $("input[name='"+end_field_name+"']").each(function(){
	        $("div[data-field_name='"+RegExp.escape(end_slug)+"'] input").first().each(function(){
//		        console.log("updating end");
	          $(this).datetimepicker('setDate',date);
	        });
	      }
	    });
    });
});	
