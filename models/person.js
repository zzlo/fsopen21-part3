const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(result => {
        console.log('connected')
    })
    .catch(error => {
        console.log('error connecting to mongodb', error.message)
    })

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minLength: 3 },
    number: { type: String, required: true, unique: true, minLength: 8 },
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})
module.exports = mongoose.model('Person', personSchema)