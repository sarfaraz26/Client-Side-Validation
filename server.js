const PORT = 1020;
const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/login',(req,res)=>{
    res.json(req.body);
});


app.listen(PORT,function(){
    console.log(`Listening to port ${PORT}`);
})