import { app } from './server/server'

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
