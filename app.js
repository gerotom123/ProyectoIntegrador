const express = require('express');
const app = express();

const mainRouter = require('./routes/mainRouter');

app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.set('views', './views');
app.use(mainRouter);


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

