var express = require('express');
var app = express();
app.use(express.static('public'));

//Serves HTML static content index.html inside app folder
app.use(express.static('app'));

app.get('/', (req, res) => {
  res.send('Hello Node js\n');
});

// health check
app.get('/health', (req, res, next) => {
   res.sendStatus(200);
});

//App should listen on all interfaces on port 8081
app.listen(8081, '0.0.0.0');
console.log(`Running on http://localhost:8081`);
console.log(`hello-world-app is running !!`);