'use strict'

// Classes -> template to create objects
// syntax => class name{ constructor(){} }

class gym {
  constructor(name, rep, set) {
    this.name = name
    this.rep = rep
    this.set = set
  }

  fullWork(time) {
    let date = new Date()
    return `in day ${date.getDay()} ${this.name} ${this.rep} rep each ${this.set} set in ${time} minutes`
  }

}
const myWorkout = new gym('biceps curl', 16, 4)
console.log(myWorkout);
console.log(myWorkout.name);
console.log(myWorkout.fullWork(5));


const legDay = new gym('hack squat', 14, 4)
console.log(legDay.fullWork(10));


