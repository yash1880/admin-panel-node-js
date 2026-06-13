const express = require('express');
const path = require('path');
const connectDB = require('./config/db'); 
const adminRoutes = require('./routes/adminRoutes'); 

const app = express();
const PORT = process.env.PORT || 9000;


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'view'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.redirect('/dashboard');
});

app.use('/', adminRoutes);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on port: ${PORT}`);
    console.log('Open http://localhost:' + PORT + '/dashboard in browser');
});
