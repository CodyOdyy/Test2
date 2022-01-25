const express = require('express')
const app = express()

app.use(express.json());

const coins = [
    { id:1, name: 'Doge'},
    { id:2, name: 'Ethereum'},
    { id:3, name: 'Litecoin'},
    { id:4, name: 'Cardano'},
    { id:5, name: 'Polkadot'},
    { id:6, name: 'BitcoinCash'},
    { id:7, name: 'Stellar'},
    { id:8, name: 'BinanceCoin'},
    { id:9, name: 'Tether'},
    { id:9, name: 'Monero'}


];

app.get('/', (req, res) => {
    res.send('Welcome to Coinbase Exchange');
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

