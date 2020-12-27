const mongoose = require('mongoose');
const USER = 'lisbeth';
const PASSWORD = 'lisbeth1293';
const DATABASE = 'employees';
const uri =`mongodb+srv://${ USER }:${ PASSWORD }@cluster0.sp3hl.mongodb.net/${ DATABASE }?retryWrites=true&w=majority`;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
};

mongoose
    .connect( uri, options )
    .then( _ => console.log('DB is connected') )
    .catch( err => console.log(err) );
