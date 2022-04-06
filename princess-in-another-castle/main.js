const statusOptions = ["Powered Up", "Big", "Small", "Dead"]
class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }
    setName(namePicked) {
        if (namePicked === "Mario"){
            this.name = "Mario";
        } else {
            this.name = "Luigi";
        }
    }
    gotHit() {
        if (this.hasStar === true){
            this.hasStar = false;
            return;
        }
        if (this.totalCoins !== 0){
            this.totalCoins = 0;
            return;
        };
        let postHitStatusIndex = statusOptions.indexOf(this.status) +1;
        this.status = statusOptions[postHitStatusIndex];
        if (this.status === "Dead"){
            clearInterval(intervalId);
            console.log(`YOU DIED (*_*)`);
        }
    }
    gotPowerUp() {
        if (this.status === "Powered Up"){
            this.hasStar = true;
            return;
        }      
        let poweredUpStatusIndex = statusOptions.indexOf(this.status) -1;
        this.status = statusOptions[poweredUpStatusIndex];
        
    }
    addCoin() {
        this.totalCoins++;
        console.log("coin added");
    }
    print(){
        console.log(`\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nHas Star: ${this.hasStar}`)
    }
}
const Mario = new Player("Mario", 0, "Big", false);
let intervalId;
function getRandom() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0){
        Mario.gotHit();
    } else if (result === 1){
        Mario.gotPowerUp();
    } else if(result === 2){
        Mario.addCoin();
    }
    Mario.print();
}

intervalId = setInterval(getRandom, 1000);



