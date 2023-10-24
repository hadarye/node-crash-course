// using express - the short right way
const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'eggs eggs eggs' },
        { title: 'Mario finds stars', snippet: 'stars stars stars' },
        { title: 'how to defeat bowser', snippet: 'bowser bowser bowser' },
    ];
    res.render('index', { title: "Home", blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});