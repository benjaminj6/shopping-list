$(document).ready(function() {

console.log('hey there');
//LIST-MENU EVENTS

	//User hovers over down list header
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

	//User submits input box with 'Enter' or add-button
		//List item is added
	//User hovers over Check-all button
	//User clicks Check-all button
		//All items 
	//User hovers over Remove-all button
	//User clicks Remove-all button

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
	})

})