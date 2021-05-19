require('./Settings/settings')
const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./Routes/auth.routes') ;
const usersRoute = require('./Routes/users.routes') ;

const app = express();
app.use(express.json());

// Config for CORS
app.use (function (req, res, next) {
    res.header ('Access-Control-Allow-Origin', '*');
    res.setHeader ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header (
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next ();
});

app.use(
    bodyParser.urlencoded({
        extended:true,  
    })
);

// Routes
app.use('/auth', authRoute);
app.use('/users', usersRoute);

app.listen(process.env.PORT, ()=> console.log(`Server running in port ${process.env.PORT}`));
