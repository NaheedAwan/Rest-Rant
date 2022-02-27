const mongoose = require('mongoose')
// creating Schema
const placeSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    pic:
    {
        type: String,
        default: 'http://placekitten.com/350/350'
    },
    cuisines:
    {
        type: String,
        required: true
    },
    city:
    {
        type: String,
        default: 'Anytown'
    },
    state:
    {
        type: String,
        default: 'USA'
    },
    founded:
    {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    }
})

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// export mongoose and schema

module.exports = mongoose.model('Place', placeSchema)























// const placeSchema = new mongoose.Schema({
//     name:
//     {
//         type: String,
//         required: true
//     },
//     pic: String,
//     cuisines:
//     {
//         type: String,
//         required: true
//     },
//     city:
//     {
//         type: String,
//         default: 'Anytown'
//     },
//     state:
//     {
//         type: String,
//         default: 'USA'
//     },
//     foundes: Number
// })