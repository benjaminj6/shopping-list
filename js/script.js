$(document).ready(function() {
//LIST-MENU EVENTS

	//User hovers over down list header
	$('.list-menu').on('mouseenter mouseleave', 'h3', function() {
		$('.list-menu h3').toggleClass('menu-hover');
	});

	//User clicks on list header
	//User hovers over list items
	//User clicks on list item
		//Closes current list and opens chosen list
		//Makes the chosen list the header text
		//Adds previous header to the menu items
	//User clicks on input box to type list name
	//User presses 'enter' or '+' to create new list
		//New list automatically displays

//LIST-MGMT-BOX EVENTS

	function add() {
		var userInput = $('.add-item-text').val();

		if (userInput.length > 0) {
			var listItemHtml = '<li> <div class="check-box">' +
			'<i class="hidden fa fa-check-square-o" aria-hidden="true"></i>' +
			'<i class="fa fa-square-o" aria-hidden="true"></i>' +
			'</div><p>' +  
			userInput +
			'</p><i class="remove-button fa fa-trash-o" aria-hidden="true">' +
			'</i></li>'
		} else {
			alert('Please enter an item!')
		};

		return listItemHtml;
	}

	//User submits input box with 'Enter'
	$('html').keydown(function(event) {
		if (event.which == 13) {
			$('.current-list').prepend(add());
			$('.add-item-text').val('')
		}
	});

	//User submits input box with Button
	$('.add-button').click(function() {
		$('.current-list').prepend(add());
		$('.add-item-text').val('');
	});

	//User hovers over Add, Check-All, or Remove-All Button
	$('.list-mgmt-box button').hover(function() {
		$(this).toggleClass('user-hover');
	});

	//User clicks Check-all button
	$('.check-all').click(function() {
		$('.current-list li').addClass('checked');
		$('.fa-square-o').addClass('hidden');
		$('.fa-check-square-o').removeClass('hidden');
	});

	//User clicks remove-all button
	$('.remove-all').click(function() {
		$('.current-list li').remove();
	});

//SHOPPING-LIST EVENTS

	//User hovers over item
	$('.shopping-list').on('mouseenter mouseleave', 'li', function() {
		$(this).toggleClass('user-hover');
	});

	//User clicks check box
	$('.shopping-list').on('click', '.check-box', function() {
		$(this).children().toggleClass('hidden');
		$(this).parent().toggleClass('checked');
	});

	//User hovers over remove-button
	$('.shopping-list').on('mouseenter mouseleave', '.remove-button', function() {
		$(this).toggleClass('icon-hover');
	});

	//User clicks remove-button
	$('.shopping-list').on('click', '.remove-button', function() {
		$(this).parent().remove();
	});

})