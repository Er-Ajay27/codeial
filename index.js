const express = require('express');
const app = express();
const port =8000;

app.listen(port, function(err){
    if(err){
        console.log(`rror in running the server: ${err}`);

    }

    console.log(`Server running on port : ${port}`);
})