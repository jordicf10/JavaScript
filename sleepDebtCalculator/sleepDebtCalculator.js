const getSleepHours = (day) => {
  
    switch(day){   //We put slept hours for every day
      case 'monday':
      return parseInt(prompt("How many hours do you sleep on monday?"));
      break;
      case 'tuesday':
      return parseInt(prompt("How many hours do you sleep on tuesday?"));
      case 'wednesday':
      return parseInt(prompt("How many hours do you sleep on wednesday?"));
      break;
      case 'thursday':
      return parseInt(prompt("How many hours do you sleep on thursday?"));
      case 'friday':
      return parseInt(prompt("How many hours do you sleep on friday?"));
      case 'saturday':
      return parseInt(prompt("How many hours do you sleep on saturday?"));
      break;
      case 'sunday':
      return parseInt(prompt("How many hours do you sleep on sunday?"));
      break;
    }
  }
  
  const getActualSleepHours = () =>{   //We find out how many hours we sleep in a week
    let monday = getSleepHours('monday');
    let tuesday = getSleepHours('tuesday');
    let wednesday = getSleepHours('wednesday');
    let thursday = getSleepHours('thursday');
    let friday = getSleepHours('friday');
    let saturday = getSleepHours('saturday');
    let sunday = getSleepHours('sunday');
    let totalHours = monday + tuesday + wednesday + thursday + friday + saturday + sunday;
  
    return totalHours;
    
  }
  
  const getIdealSleepHours = () => {    //We declare how many hours we wish to sleep
    let idealHours = parseInt(prompt("What is your ideal slept hours?:"));
    let totalIdeal = idealHours * 7;
    return totalIdeal;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      document.write('You have the perfect amount of sleep, because you sleep ' + actualSleepHours + ' hours, and you set your ideal slept hours in ' + idealSleepHours + ' hours. Congrats!');
    }
    if(idealSleepHours-actualSleepHours === 1){
        document.write('You should get some rest, because you sleep ' + actualSleepHours + ' hours, and you set your ideal slept hours in ' + idealSleepHours + ' hours, so you sleep under ' + (idealSleepHours-actualSleepHours) + ' hour than your ideal.');
      }else if(actualSleepHours < idealSleepHours){
        document.write('You should get some rest, because you sleep ' + actualSleepHours + ' hours, and you set your ideal slept hours in ' + idealSleepHours + ' hours, so you sleep under ' + (idealSleepHours-actualSleepHours) + ' hours than your ideal.');
    }
    if(actualSleepHours-idealSleepHours === 1){
        document.write('You sleep more than you needed, because you sleep ' + actualSleepHours + ' hours, and you set your ideal slept hours in ' + idealSleepHours + ' hours, so you sleep ' + (actualSleepHours-idealSleepHours) + ' more hour than your ideal.');
      }else if(actualSleepHours > idealSleepHours){
        document.write('You sleep more than you needed, because you sleep ' + actualSleepHours + ' hours, and you set your ideal slept hours in ' + idealSleepHours + ' hours, so you sleep ' + (actualSleepHours-idealSleepHours) + ' more hours than your ideal.');
    }
  }
  
  calculateSleepDebt();
  