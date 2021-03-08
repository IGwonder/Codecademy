console.clear()

let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true
;
let runnersAge = 17;

if (runnersAge > 18 && earlyRegister) {
    raceNumber += 1000;
}

if (runnersAge > 18 && earlyRegister) {
    console.log('Early adults run at 9:30 am.');
    console.log(`Runner ${raceNumber}, your race will start at 9:30 am.`);
} else if (runnersAge > 18 && !earlyRegister) { 
    console.log('Late adults run at 11:00 am.');
    console.log(`Runner ${raceNumber}, your race will start at 11:00 am.`);
} else if (runnersAge < 18) {
    console.log('Youth registrants run at 12:30 pm (regardless of registration).')
    console.log(`Runner ${raceNumber}, your race will start at 12:30 am.`)
} else {
    console.log('Runners of 18 years old: see registration desk.')
}
