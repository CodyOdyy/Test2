const express = require('express')
const app = express()

app.use(express.json());

const coins = [
    { id:1, name: 'Dodge'},
    { id:2, name: 'coin2'},
    { id:3, name: 'coin3'},

];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/coins/types', (req, res) => {
    res.send(coins);
});

app.get('/coins/types/:id', (req, res) => {
    const coin =coins.find(c => c.id === parseInt(req.params.id));
if(!coin) res.status(404).send('The given coin was not found');
res.send(coin);

});

app.post('/coins', (req, res) => {
    const coin = {
        id: coins.length + 1,
        name: req.body.name

    };
    coins.push(coin);
    res.send(coin);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port 3000'));


//app.post()
//app.put()
//app.delete()

