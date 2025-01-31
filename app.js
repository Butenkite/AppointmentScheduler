import express from 'express';

// initialize express
const app = express();

// serve static files from public
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// Define PORT
const PORT = 3000;

// store data

const appointments = [];
// home page
app.get('/', (req, res) =>{

    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// confirmation
app.post('/confirmation', (req, res) =>{
    
    //pushing data from form
    appointments.push(req.body);

    //timestamp
    const d = new Date();
    let minutes = d.getMinutes();
    let hour = d.getHours();
    appointments.push(`Timestamp: ${hour + ":" + minutes}`);
    //send user to confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`)
    
    console.log(appointments);
});

app.get('/admin/appointments', (req, res) =>{
    res.send(appointments);
    console.log(appointments);
});

// listen to PORT
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});