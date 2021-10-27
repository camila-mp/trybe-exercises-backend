const express = require('express');

const app = express();

app.use(express.json());

const validateUserInfo = require('./middlewares/validateUserInfo')

app.post('./user/register', validateUserInfo)


app.listen(3000, () => console.log('app is listening at port 3000'));

