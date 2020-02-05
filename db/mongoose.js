const mongoose=require('mongoose');
require('dotenv/config');

//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify:false

}, console.log("connected to db successfully!")).catch((error) => console.log(error));
;