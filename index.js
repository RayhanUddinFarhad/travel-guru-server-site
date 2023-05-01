const express = require('express')
const app = express()
const port = 3000
const category = require ('./category.json')
const details = require ('./categoryDetails.json')
const hotels = require ('./hotels.json')

const cors = require('cors')

app.use(cors())



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get ('/category', (req, res) => {


    res.send (category)
 })


 app.get ('/category/:id', (req, res) => {

    const id = req.params.id;


    const detail = details.find (c => c.id == id)

    res.send  (detail)



  })

app.get ('/hotels', (req, res) => { 

  res.send (hotels)


 
}) 

app.get ('/hotels/:id', (req, res) => {

  const id = req.params.id;
  const hotel = hotels.filter (c => c.id == id)

  res.send (hotel)


 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})