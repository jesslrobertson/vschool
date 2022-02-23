const form = document["airline-form"];

function formAlert(event) {
    event.preventDefault();
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.travelLocation.value;
    var diet = [];
        if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
        }
        if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
        }
        if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
        }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    form.reset();
}

form.addEventListener('submit', formAlert);

