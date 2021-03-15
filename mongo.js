const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

if (process.argv.length < 3) {
    console.log('give password')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.r9p5o.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true},
})

personSchema.plugin(uniqueValidator)

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
        process.exit(1)
    })
}

const name = process.argv[3]
const number = process.argv[4]

const person = new Person({
    name: name,
    number: number,
})

person.save().then(response => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
})