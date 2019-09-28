//CHECK OFF SPECIFIC TODOS BY CLICKING


/**WE PLACE A CLICK LISTENER ON PARENT 'ul' AND ON 'li' CLICKS, RUN FUNCITON,
	SINCE WE PUT THE CLICK LISTENER ON PARENT 'ul', IT WILL HANDLE ALL NEW 'li' THAT
	ARE BEING CREATED**/

$("ul").on("click","li",function(){ 
	$(this).toggleClass("completed");
});

//CLICK ON 'X' TO DELETE TODO

/**WE PLACE A CLICK LISTENER ON PARENT 'ul' AND ON 'span' CLICKS, RUN FUNCITON,
	SINCE WE PUT THE CLICK LISTENER ON PARENT 'ul', IT WILL HANDLE ALL NEW 'span' THAT
	ARE BEING CREATED**/

$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	}); //WHEN WE CLICK OUR SPAN, ITS PARENT "LI" IS REMOVED

	event.stopPropagation(); //STOPS EVENT BUBBLING, WHICH TRIGGERS PARENT ELEMENTS, stopPropagation() IS A JQUERY METHOD 
});

//CREATING TODOS

$("input[type=text]").keypress(function(event){

	if(event.which===13){ //WHEN 'ENTER' KEY IS PRESSED, KEYCODE FOR 'ENTER' = 13 

		//STORE USERINPUT
		let todoText = $(this).val(); 

		//CREATE A NEW 'li' AND ADD TO 'ul' USING 'append()'
		//** append() => ADDS TEXT, CAN ADD 'HTML' CODE IN HERE **/

		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText +"</li>");

		//CLEAR INPUT AFTER

		$(this).val("");

	}
});

//HIDE INPUT

$("#toggle-form").click(function(){
	$("input[type=text]").fadeToggle();
})