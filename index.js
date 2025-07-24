const express = require('express');
const app = express();
const messages = [];

app.use(express.json()); // Allows JSON request bodies

app.get('/', (req, res) => {
  res.send('Server is working!');
});

//app.post('/message', (req, res) => {
  const msg = req.body.message;
  if (!msg) {
    return res.status(400).send({ success: false, error: 'Message required' });
  }
  messages.push(msg);
  res.send({ success: true, message: 'Message saved!' });
//});

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
