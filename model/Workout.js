const mongoose = require('mongoose')


const workoutSchema = new mongoose.Schema({
    day: {
        type:Date,
        default: Date.now
    },
    exercises: Array,
},{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

workoutSchema.virtual('totalDuration').get(function() {
    if(this.exercises.length > 0 ) {
        let total = 0
        this.exercises.forEach(element => {
            total = total + element.duration
        });
        return total;
    } else {
        return 0;
    }
  });

module.exports = mongoose.model('Workout', workoutSchema)