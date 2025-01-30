import express from 'express';

// initialize express
const app = express();

// serve static files from public
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// Define PORT
const PORT = 3000;

// store data
const d = new Date();
const appointments = [];
// home page
app.get('/', (req, res) =>{

    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// confirmation
app.post('/confirmation', (req, res) =>{
    let minutes = d.getMinutes();
    let hour = d.getHours();
    appointments.push(req.body);
    appointments.push(`Timestamp: ${hour + ":" + minutes}`);
    res.send(appointments);
    console.log(appointments);
});

app.get('/admin/appointments', (req, res) =>{
    res.send(appointments);
    console.log(appointments);
});

// listen to PORT
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
})