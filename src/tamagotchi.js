export default class Tamagotchi {
  constructor(name){
    this.name = name;
    this.intervalIds = [];
    this.feed();
    this.play();
    this.rest();
    this.startIntervals();
  }

  startIntervals(){
    this.intervalIds.push(setInterval( () => {

        this.foodLevel--;
      }
    }, 5000));

    this.intervalIds.push(setInterval( () => {
      if (this.happinessLevel > 0) {
      this.happinessLevel--;
      }
    }, 5000));

    this.intervalIds.push(setInterval( () => {
      if (this.restLevel > 0) {
      this.restLevel--;
      }
    }, 5000));
  }

  feed(){
    this.foodLevel = 10;
  }

  play(){
    this.happinessLevel = 10;
  }

  rest(){
    this.restLevel = 10;
  }

  didYourPetDie(){
    if(this.foodLevel <= 0 || this.happinessLevel <= 0 || this.restLevel <= 0){
      return true;
    } else {
      return false;
    }
  }
}
