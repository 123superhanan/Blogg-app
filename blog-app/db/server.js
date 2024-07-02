import express from 'express'
const app = express()


const PORT = process.env.PORT || 5173;

app.get('/', (req, res) => {
    res.send('i am live ')
  })

  const start = async () => {
try {
    app.listen(PORT, () => {
            console.log( `${PORT} i am connect`) ;  
    })
} catch (error) {
    console.log(error)
}
  }
  start();