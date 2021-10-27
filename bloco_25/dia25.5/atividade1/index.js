const express = require('express');
const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => console.log('app is listening at port 3000'));

