const express = require('express');
const app = express();
const { errorHandler } = require('./utils/handler.js');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/check', (req,res) => {
    try {
        let { test } = req.body;
        if(!test) throw { code : 2 }
        if(check_test) res.send("checking")
    } catch (err) {
      return res.status(400).send(errorHandler(err, req));
    }

});


app.listen(8081, () => {
    console.log('server on');
})