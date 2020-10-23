const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HfFPiHjSomLG9HOSq4JqjqTU2p2bwxTutmV2vUI7qqvSzmRE9RakKetXMWBqqyO29beldFLauEbogdGLUvR1aDI00i1BMHZLA')

// API (in order to set up)

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Recieved BOOOM!! for this amount', total)

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency remember!
		currency: "usd",
	});

	// 201 -> OK, CREATED
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	})
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint (a local one)
// http://localhost:5001/the-ammazon-clone/us-central1/api
