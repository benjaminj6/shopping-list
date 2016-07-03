$(document).ready(function() {
//LIST-MENU EVENTS

	//User hovers over down list header
	$('.list-menu').on('mouseenter mouseleave', '.list-menu-header', function() {
		$('.list-menu-header').toggleClass('menu-hover');
	});

	//User clicks on list header to show/hide menu
	$('.list-menu-header').click(function() {
		$('.list-nav').toggleClass('hidden');	
	});

	//User hovers over list items
	$('.list-nav').on('mouseenter mouseleave', 'li', function() {
		$(this).toggleClass('user-hover');
	});

	//User clicks on list
	$('.list-nav').on('click', 'li.nav-list', function() {
		//Automatically closes menu
		$('.list-nav').toggleClass('hidden');

		//Closes current list and opens chosen list
		$('.shopping-list ul.current-list')
			.toggleClass('hidden current-list');

		//Retrieve ListName Class
		var listActiveClasses = $(this).attr('class').split(' ');
		var thisListClass = listActiveClasses[0];
		
		//Retrives List with same class and shows it
		$('.shopping-list').children('.' + thisListClass)
			.toggleClass('hidden current-list');

		//Makes the chosen list the header text
		var thisListTitle = $(this).text();
		$('.list-menu-header h3').text(thisListTitle);

		//Adds previous header to the menu items and 'hides'
			//selected list from menu items		
		$('.list-nav li.hidden').toggleClass('hidden');
		$(this).toggleClass('hidden');
	});

	//User presses 'enter' or '+' to create new list
	//function that generates html for the nav-list item
	function createNavItemHtml() {	
		var userInput = $('.new-list-text').val();
		var newNavItemClass = userInput.split(' ').join('-').toLowerCase();
			
		var listNavHtml = '<li class="' + 
			newNavItemClass + ' nav-list">' + 
			userInput + '</li>';

		return(listNavHtml);
	}

	//function that generates html and classes for the new shopping list
	function createNewShoppingList() {
		var userInput = $('.new-list-text').val();
		var newShoppingListClass = userInput.split(' ').join('-').toLowerCase();

		var newShoppingListHtml = '<ul class="' +
			newShoppingListClass + ' current-list"></ul>';

		return newShoppingListHtml;
	}

	$('.create-new-list i.fa-plus').click(function () {
		var userInput = $('.new-list-text').val();
		var newShoppingListClass = userInput.split(' ').join('-').toLowerCase();

		if(userInput.length > 0) {
			$('.create-new-list').before(createNavItemHtml());
			$('.list-menu-header h3').text($('.new-list-text').val());
			$('.list-nav').toggleClass('hidden');
			$('.shopping-list').append(createNewShoppingList());
			$('.list-nav li.hidden').toggleClass('hidden');
			$('.list-nav li.' + newShoppingListClass).toggleClass('hidden');
			$('.shopping-list ul.current-list').toggleClass('hidden current-list');
			
			//Retrieve ListName Class
			var listActiveClasses = $(this).attr('class').split(' ');
			var thisListClass = listActiveClasses[0];
			
			//Retrives List with same class and shows it
			$('.shopping-list').children('.' + thisListClass)
				.toggleClass('hidden current-list');

		} else {
			alert('Please enter a name for your list!')
		};
		$('.new-list-text').val('');

	});

	$('.list-menu').keydown(function(event) {
		if(event.which == 13) {

			var userInput = $('.new-list-text').val();
			var newShoppingListClass = userInput.split(' ').join('-').toLowerCase();

			if(userInput.length > 0) {
				$('.create-new-list').before(createNavItemHtml());
				$('.list-menu-header h3').text($('.new-list-text').val());
				$('.list-nav').toggleClass('hidden');						
				$('.shopping-list ul.current-list').toggleClass('hidden current-list');

				//Creates New Shopping List
				$('.shopping-list').append(createNewShoppingList());
				$('.list-nav li.hidden').toggleClass('hidden');
				$('.list-nav li.' + newShoppingListClass).toggleClass('hidden');
				
				//Retrieve ListName Class
				var listActiveClasses = $(this).attr('class').split(' ');
				var thisListClass = listActiveClasses[0];
				
				//Retrives List with same class and shows it
				$('.shopping-list').children('.' + thisListClass)
					.toggleClass('hidden current-list');

			} else {
				alert('Please enter a name for your list!')
			};
		};
	})

//--------LIST-MGMT-BOX EVENTS---------

	function addItem() {
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
	$('.list-mgmt-box').keydown(function(event) {
		if (event.which == 13) {
			$('.current-list').prepend(addItem());
			$('.add-item-text').val('')
		}
	});

	//User submits input box with Button
	$('.add-button').click(function() {
		$('.current-list').prepend(addItem());
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

//-------------SHOPPING-LIST EVENTS--------------

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