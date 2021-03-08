console.clear()

const dayOfTheWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

const getSleepHours = day => {
    for (var i = 0; i < 7; i++) {
        switch (day) {
            case dayOfTheWeek[i]:
                return 8+2;
                break;    
        }
    }
}

const getActualSleepHours = () => {
    var totalSleep = 0
    for (var i=0; i<7; i++) {
        totalSleep += getSleepHours(dayOfTheWeek[i])
    }
    return totalSleep
}

const getIdealSleepHours = () => {
    idealHours = 9;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours == idealSleepHours) {
        console.log('Perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('Well rested, nice! You slept ' + (actualSleepHours-idealSleepHours) + ' hours extra!')
    } else if (actualSleepHours < idealSleepHours) {
            console.log('You need more sleep! You have slept ' + (actualSleepHours - idealSleepHours) + ' hours too little!') 
    }
}

calculateSleepDebt()
