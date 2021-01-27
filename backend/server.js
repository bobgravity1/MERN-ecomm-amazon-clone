import express from 'express'
import data from './data.js'

const app=express();

app.get('/', (req, res)=>{
  res.send('server ready')
})

app.get('/api/products', (req, res)=>{
  const dataz=JSON.stringify(data.products)
  res.send(dataz)
})

const port=process.env.PORT||5000
app.listen(port, ()=>{
  console.log(`serve at https://localhost:${port}`)
})
