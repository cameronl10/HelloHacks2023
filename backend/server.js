const express = require ('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect('mongodb+srv://cameronblazes:fDlyRT8Ba1hzhMhf@cluster0.gnwaffd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open',() => console.log("database connected"));

app.use(cors());
const userRouter = require('./routers/user')
app.use('/users',userRouter);
app.listen(3001, () => console.log("running on 3001"));