const form = document.baddieForm
const goombas = form.goombaInput;
const bobOmbs = form.bobOmbInput;
const cheeps = form.cheepInput;
const totalDiv = document.getElementById("total");
let runningTotal = 0;
let count = 0;

totalDiv.style.display = 'none';

addEventListener("submit", (e) => {
    (e).preventDefault();
    runningTotal = totalTracker (goombas.value, bobOmbs.value, cheeps.value);
    if (count === 0){
        let total = document.createElement("h1");
        total.textContent = `${runningTotal}`;
        total.style.textAlign = 'center';
        totalDiv.style.display = 'flex';
        totalDiv.append(total);
        count++;
    } else {
        total.innerHTML = "<h1>Grand Total:" + `\n${runningTotal}` + "</h1>";
        total.style.textAlign = 'center';
        totalDiv.style.display = 'flex';
    }
    form.reset();
}
)

function totalTracker(w,x,y, pastTotal, currentTotal) {
    currentTotal = ((goombas.value * 5) + (bobOmbs.value * 7)  + (cheeps.value * 11));
    runningTotal += currentTotal;
    return runningTotal;
    }