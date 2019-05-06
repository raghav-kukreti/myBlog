// import app from "./app";

// const PORT:number = 3000;

// app.listen(PORT, () =>{
//     console.log('Express server listening on port ' + PORT);
// });


import app from "./app";
import * as express from "express";
// const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));