import express from 'express';
import { generateRandomString } from './randomStringGenerator.js';
import { USERS } from './users.js';
// import { QUESTIONS } from './questions.js';
// import { generateRandomString } from '../utils';
const app = express();

// In modern versions of Express.js (i.e., Express 4.16+), 
// the body-parser middleware is no longer required 
// as it is included in the Express.js core. 
// You can directly access the request body data using the req.body object 
// without needing to install and require the body-parser package.

// Middleware for parsing JSON request bodies
app.use(express.json());

// Allow requests from any origin
app.use((req, res, next) => {
    // using live server of VSCode to host the index.html file
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
    // Add logic to decode body
    // body should have email and password
    // res.send('signup')
    //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)
    // return back 200 status code to the client

    console.log("req.body", req.body);

    const email = req.body.email;
    const password = req.body.password;

    const userExists = USERS.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
    } else {
        USERS.push({ email, password });
        return res.status(200).json({ success: true, message: 'Signup successful!' });
    }

})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userExists = USERS.some(user => user.email === email && user.password === password);
    if(userExists) {
        const randomString = generateRandomString(10);
        return res.status(200).json({ success: true, authToken: randomString });
    } else {
        return res.status(401).json({ error: 'error loggin in' });
    }

    // Add logic to decode body
    // body should have email and password
    // Check if the user with the given email exists in the USERS array
    // Also ensure that the password is the same
    // If the password is the same, return back 200 status code to the client
    // Also send back a token (any random string will do for now)
    // If the password is not the same, return back 401 status code to the client
});

app.get('/questions', (req, res) => {
    //return the user all the questions in the QUESTIONS array
    res.send('Hello World!')
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