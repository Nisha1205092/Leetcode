import express from 'express';
import cookieParser from 'cookie-parser';
import { generateRandomString } from './randomStringGenerator.js';
import { USERS } from './users.js';
import { QUESTIONS } from './questions.js';
// import { generateRandomString } from '../utils';

const app = express();

// Middleware for parsing cookies
app.use(cookieParser());
// In modern versions of Express.js (i.e., Express 4.16+), 
// the body-parser middleware is no longer required 
// as it is included in the Express.js core. 
// You can directly access the request body data using the req.body object 
// without needing to install and require the body-parser package.

// Middleware for parsing JSON request bodies
app.use(express.json());
// Allow requests from any origin
app.use((req, res, next) => {
    // using "live server" extension of VSCode to host the index.html file
    const allowedOrigins = ['http://127.0.0.1:5500'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const port = 3000;

// const QUESTIONS = [{
//     title: "Two states",
//     description: "Given an array , return the maximum of the array?",
//     testCases: [{
//         input: "[1,2,3,4,5]",
//         output: "5"
//     }]
// }];


app.post('/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userExists = USERS.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
    } else {
        USERS.push({ name, email, password });
        return res.status(200).json({ success: true, message: 'Signup successful!' });
    }

})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = USERS.find(user => user.email === email && user.password === password);
    if (user) {
        // Assuming `generateRandomString` is a function that generates a random string
        const randomString = generateRandomString(10);
        // Set authToken and username as cookies
        res.cookie('authToken', randomString);
        res.cookie('username', user.name);
        // Redirect to /dashboard
        return res.status(200).json({ success: true, message: 'Login successful!' });
    } else {
        return res.status(401).json({ error: 'error logging in' });
    }
});

app.get('/dashboard', (req, res) => {
    // Access the authToken and username from cookies
    const authToken = req.cookies.authToken;
    const username = req.cookies.username;

    // Check if authToken and username are present
    if (authToken && username) {
        // Render the dashboard page with the user's information
        return res.send(`Welcome to the dashboard, ${username}!`);
    } else {
        // Redirect to login page or show an error message
        return res.redirect('/login'); // or res.send('Error: User not authenticated');
    }
});

/*
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userExists = USERS.some(user => user.email === email && user.password === password);
    if (userExists) {
        const randomString = generateRandomString(10);
        return res.status(200).json({ success: true, authToken: randomString });
    } else {
        return res.status(401).json({ error: 'error loggin in' });
    }
});
*/

app.get('/questions', (req, res) => {
    //extract {title, description} from the QUESTIONS array
    const questionList = QUESTIONS.map(question => (
        {
            title: question.title,
            description: question.description
        })
    );

    res.json(questionList);
})

app.get('/submissions', (req, res) => {
    // return the users submissions for this problem
    res.send('Hello World!')
})

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// https://github.com/hkirat/full-stack-assignment