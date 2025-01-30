import express from 'express';

// initialize express
const app = express();

// serve static files from public
app.use(express.static('public'));

// Define PORT
const PORT = 3000;
const d = new Date();
const appointments = [];
// home page
app.get('/', (req, res) =>{

    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/confirmation', (req, res) =>{
    let minutes = d.getMinutes();
    appointments.push(req.body);
    appointments.push(`Time: ${minutes}`);
    res.send(req.body);
    console.log(req.body)
});

app.get('/admin/appointments', (req, res) =>{
    res.send(appointments);
});

// listen to PORT
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
})