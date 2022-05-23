const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Yasmin:Yasmin123456@cluster0.cmy6p.mongodb.net/**test**?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;