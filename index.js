const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
require('dotenv').config()
var jwt = require('jsonwebtoken');
app.use(cors())
app.use(express.json());
// connectify-user
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7oueg7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;








const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

      

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)

        const database = client.db('hodlinfo');

        const DataCollections = database.collection("top10");
        

        app.get('/', async (req, res) => {
            const result=await DataCollections.find().toArray()
            res.send(result)
        })


     










       










        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error    await client.close();
    }
}

run().catch(console.dir);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})