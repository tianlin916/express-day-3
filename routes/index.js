var express = require('express');
var router = express.Router();

var db = {
	'david': 'apple',
	'monde': 'orange',
	'alan': 'pineapple',
	'liang': 'banana'
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Your Favorite Fruit'});
});

/* GET userlist JSON */
router.get('/userlist', function (req, res, next) {
	res.send(db);
});
/* POST to adduser */
router.post('/adduser', function (req, res, next) {
	var userName = req.body.username;
	var userColor = req.body.usercolor;

	db[userName] = userColor;
	res.redirect('/');
});

/* POST to deleteuser */
router.post('/deleteuser', function (req, res, next) {
	var userName = req.body.username;
	if (userName in db) {
		delete db[userName]
		res.redirect('/');	
	} else {
		var err = {
			message: "User not found",
		};
		res.render('error', err);
	}
});

router.get
module.exports = router;
