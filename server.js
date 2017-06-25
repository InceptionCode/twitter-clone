const koa = require('koa');
const app = koa();
const router = require('koa-router')();
const parser = require('co-body');

/*
look at the koajs.com 
look at http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api

http://api.icndb.com/jokes/random

*/


let tweets = [ { id: 1 , body: 'This is a tweet'},
                  { id: 2, body: 'This is a second tweet'}];

 router.get('/', function *(){
   this.body = 'hello from the root'  
    
 })

router.get('/tweets', function *(){
    this.body = tweets;
})


router.post('/tweets', function *(){
    // get the posted tweet 
    axios.post(url, { body: 'some tweet'})
    const tweet = yield parser(this);
    tweets.push(tweet);
    
})

app.use(router.routes());
app.use(router.allowedMethods());


// GET /tweets -> some function

// POST /tweets -> some other function

// DELETE /tweets -> a third function

// app.use(function *(next){
//     console.log('in first function top!');
//     yield next;
//     console.log('in first function bottom!')
// })

// app.use(function *(){
//     console.log('in second function!');
//     this.body = 'hello from koa'; 
// });

// app.use(function *(next){
//     console.log('in third function!');
    
// })

app.listen(process.env.PORT);

// https://darrell-twitter-clone-front-end-knowthen.c9users.io/