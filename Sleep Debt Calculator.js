//Sleep Debt Calculator
//By Marc A Felicidario
// 30 November 2022
//JavaScript

const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    }
    else if(day === 'tuesday') {
      return 6;
    }
    else if(day === 'wednesday') {
      return 8;
    }
    else if(day === 'thursday') {
      return 7;
    }
    else if(day === 'friday') {
      return 8;
    }
    else if(day === 'saturday') {
      return 8;
    } else {
      return 8;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours =
  getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
    }
  
    else if(actualSleepHours > idealSleepHours) {
      console.log("You've got " + (idealSleepHours - actualSleepHours) + "more hours this week.");
    }
  
    else if(actualSleepHours < idealSleepHours) {
      console.log("You should get some rest because you slept " +(idealSleepHours - actualSleepHours) + " hours less than you should have slept this week.");
    }
  
    else {
      console.log('Error! Something went wrong, check your code');
    }
  };
  
  calculateSleepDebt();
    