import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('olá mundo')
})

export { app }