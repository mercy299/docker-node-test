const express = require('express');
const hbs = require('express-handlebars');
const os = require('os');
const hostname = os.hostname();
const engine = hbs.engine;

const app = express();
const path = require('path');
const router = express.Router();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
  res.render('index', { layout: false, hostname });
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
