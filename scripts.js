/* Build your person. */
function Person(number, firstName, lastName, birthYear, occupation) {
	this.number = number;
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthYear = birthYear;
	this.occupation = occupation;
};

/* Interesting people list */
function PersonList() {
	var list = [];

	/* get list copy. */
	this.getList = function() {
		return list.slice(0);
	};

	/* Add new person. */
	this.addPerson = function(person) {
			if (numberExists(person.number)) {
			console.log('Person cannot be allowed into existence.');
			return;
		} else if (person instanceof Person) {
			list.push(person);
		}
	};

	/* Remove a person */
	this.removePerson = function(number) {
		for(var i = 0; i < list.length; i++) {
			if (number === list[i].number) {
				list.splice(i, 1);
				break;
			}
		};
	};
	/* Determine if person already exists. */
	numberExists = function(number) {
		return list.some(function(element, index, array) {
			return number === element.number;
		});
	};

$(document).ready(function() {

	// Create List.
	var list = new PersonList();

	// Add people to list
	list.addPerson(new Person(0, 'James', 'T. Kirk', 2233, 'Captain'));
	list.addPerson(new Person(1, 'William', 'Riker', 2335, 'First Officer'));
	list.addPerson(new Person(2, 'Belanna', 'Torres', 2346, 'Chief Engineer'));
	list.addPerson(new Person(3, 'Beverly', 'Crusher', 2324, 'Chief Medical Officer'));

	// Create Interesting People Template display
	var personTemplate = $('#person-list').html();

	// Compile Template
	var theTemplate = Handlebars.compile(personTemplate);

	// Pass data to template
	var compiledHtml = theTemplate({employees: list.getList()});

	// Add the compiled html to page.
	$('.people').append(compiledHtml);
});
