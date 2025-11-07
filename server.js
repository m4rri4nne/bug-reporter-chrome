const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
console.log('teste');

const CLIENT_ID = 'clientID';
const CLIENT_SECRET = 'clientSecret';

// Rout responsible for make login with GitHub and get access token
app.get('/login', (res, response) => {
    const redirect = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=read:user,user:email`;
    res.redirect(redirect);
}); 

//Callback route to get the access token
app.get('/callback', async (req, res) => {
    const requestToken = req.query.code;
    const tokenResponse = await fetch("https?//github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: requestToken
        })
    });

    const data = await tokenResponse.json();
    const accessToken = data.access_token;
    res.json({ access_token: accessToken });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});