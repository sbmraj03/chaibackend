const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('ShubhamKumar')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=> {
    res.send("<h2>Chai aur Code</h2>")
})


app.listen(process.env.PORT||4000, ()=> {
    console.log(`Example app listening on port ${port}`)
}) 