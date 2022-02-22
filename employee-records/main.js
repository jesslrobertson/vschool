const employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.print = function(){
    console.log("Name: ", this.name, ", Title: ", this.jobTitle, ", Salary: ", this.salary, ", Status: ", this.status);
}

const noriNight = new Employee ("Nori Night", "Hunter of Light", "catnip, scrtiches, and treats");
const monroeCat = new Employee ("Monroe Cat", "Maker of Loaves", "catnip, scritches, belly rubs, and treats", "part time");
const robDegeorge = new Employee ("Rob DeGeorge", "Kitchen Wizard", "cuddles, kisses, and massages");

noriNight.print();

robDegeorge.print();