const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 3001


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//monogbd config => badrinaath145 pass : tAhVjtJfde00uXeO


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://badrinaath145:tAhVjtJfde00uXeO@project.n6l1lfz.mongodb.net/?retryWrites=true&w=majority&appName=Project";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    await client.connect();
    // Send a ping to confirm a successful connection
    const menuCollections = client.db("project").collection("menus");
    const cartCollections = client.db("project").collection("cartItems");
    
    //menu opeartions
    app.get('/menu',async(req,res)=>{
      const result = await menuCollections.find().toArray();
      res.send(result)
    })

    app.post('/carts',async(req,res) => {
      const cartItems = req.body;
      const result = await cartCollections.insertOne(cartItems);
      res.send(result)
    })

    app.get('/carts',async(req,res) => {
      const email = req.query.email;
      const filter = {email:email};
      const result = await cartCollections.find(filter).toArray();
      res.send(result)
    })



    app.get('/carts/:id',async(req,res) => {
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const result = await cartCollections.findOne(filter);
      res.send(result)
    })

    app.delete('/carts/:id',async(req,res) => {
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const result = await cartCollections.deleteOne(filter);
      res.send(result)
    })

    app.put('/carts/:id',async(req,res) => {
      const id = req.params.id;
      const {quantity} = req.body;
      const filter = {_id : new ObjectId(id)};
      const options = {upsert:true};
      const updateDoc = {
        $set :{
          quantity : parseInt(quantity,10)
        },
      }
      const result = await cartCollections.updateOne(filter,updateDoc,options);
      //res.send(result)
    })



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})