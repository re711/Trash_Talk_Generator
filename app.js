const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const talkGenerator = require('./talk_generator')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const generator = talkGenerator(req.body)
    res.render('index', { generator })
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`)
})