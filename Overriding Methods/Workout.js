class Workout {
    sets() {
        console.log("10 reps done")
    }
}
class Bench extends Workout {
    sets() {
        console.log("7 reps done");
    }
}
class Squat extends Workout {
    sets() {
        console.log("5 reps done")
    }
}
const exercise1 = new Bench();
const exercise2 = new Squat();
exercise1.sets();
exercise2.sets();