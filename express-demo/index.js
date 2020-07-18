const express = require('express');
const debug = require('debug')('app:startup');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const home = require('./routes/home');
const courses = require('./routes/courses')
var authentication = require('./middleware/Authentication');
const Joi = require('joi');
const app = express();
//below method is used to handle the req and response ad json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
//using router 
app.use('/api/courses',courses);
app.use('/',home);
app.use(logger);

app.use(authentication);
debug(`Environment is : ${app.get('env')}`)
debug(process.env.NODE_ENV);
if(app.get('env')=='development')
{
    app.use(morgan('tiny'));//this is used to log the http request  in console
    debug('using morgan to log the request');
}


//to display the default message
const port =process.env.PORT ||3000;
app.listen(port,()=> debug(`started the server and listening on ${port}`));