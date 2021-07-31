var mongoose = require('mongoose');

const URL = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.t64um.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority";

mongoose.connect(URL, {
    userNewUrlParser : true
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));