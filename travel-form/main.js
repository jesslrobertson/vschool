const form = document['travelForm'];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    let age = form.age.value;
    const gender = form.gender.value;
    const destination =  form.destination.value;
    let dietaryRestrictions = [];
    for (i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
        dietaryRestrictions.push(form.diet[i].value);
        }
    }
    alert(`First Name: ${firstName} \nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nDestination: ${destination}\nDiet: ${dietaryRestrictions}`);
    form.reset();
})