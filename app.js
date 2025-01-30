import express from 'express';

// initialize express
const app = express();

// serve static files from public
app.use(express.static('public'));

// Define PORT
const PORT = 3000;

// home page
app.get('/', (req, res) =>{

    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// listen to PORT
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
})