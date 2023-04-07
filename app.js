const port = 3000;
const express = require('express');
const path = require('path');
const router = express.Router();
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
app.use(i18nextMiddleware.handle(i18next));
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to project folder.
});

router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
    //__dirname : It will resolve to project folder.
});

router.get('/sitemap', function(req, res) {
    res.sendFile(path.join(__dirname + '/sitemap.html'));
    //__dirname : It will resolve to project folder.
});

//add the router
app.use('/', router);
app.use(express.static('public'))
app.listen(process.env.port || 3000);
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');


i18next
    .use(i18nextMiddleware.LanguageDetector)
    .use(Backend)
    .init({
        backend: {
            loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
        },
        debug: true,
        detection: {
            order: ['querystring', 'cookie'],
            caches: ['cookie']
        },
        preload: ['en', 'ru'],
        saveMissing: true,
        fallBackLng: ['en']

    });
app.use(i18nextMiddleware.handle(i18next));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    app.use(
        middleware.handle(i18next, {
            ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /* return true to ignore */ }
            removeLngFromUrl: false
        })
    );
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

console.log('Running at Port 3000');