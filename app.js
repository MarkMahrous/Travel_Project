var express = require('express');
const { Db, ObjectId } = require('mongodb');
var path = require('path');
var sessions = require('express-session');
const cookieParser=require("cookie-parser");
const console = require('console');
var app = express();

// view engine setup
oneDay=1000*60*60*24
app.use(sessions({resave:false,saveUninitialized:true,secret:'anyrandomstring',cookie:{maxAge:oneDay}}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
//const myusername="admin";
//const mypassword="admin";

var session

app.get('/', function(req,res){
res.render('login',{login_message:""})
});
app.get('/bali' , function(req,res){
if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('bali',{message:" "});

});
app.get('/cities' , function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('cities',{message:" "});

});
app.get('/hiking' , function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('hiking',{message:" "});

});
app.get('/annapurna' , function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('annapurna',{message:" "});

});
app.get('/inca' , function(req,res){
  if(!req.session.userid ){
  res.redirect('/');
return;
}
res.render('inca',{message:" "});
});
app.get('/islands' , function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('islands',{message:" "});
});
  app.get('/home' , function(req,res){
    console.log(req.session.userid);
    if(!(req.session.userid) ){
      res.redirect('/');
    return;
    }
  
  res.render('home',{home:""})
});
app.get('/paris' , function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('paris',{message:" "});
});
app.get('/registration' , function(req,res){
 res.render('registration',{register_message:""})
});
app.get('/rome' , function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('rome',{message:" "});
});
app.get('/santorini' , function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('santorini',{message:" "});
});
app.get('/search' , function(req,res){
  if(!req.session.userid &&name.at(name.at(name.length-1))!="admin"){
    res.redirect('/');
  return;
  }
  if(name.length>0){
    if('paris'.includes(searches[searches.length-1])){
      appear1.push("true");
    }
    else{
      appear1.push("false");
    }
    if('rome'.includes(searches[searches.length-1])){
      appear1.push("true");
    
       }
       else{
        appear1.push("false");
      }
    if('inca'.includes(searches[searches.length-1])){
      appear1.push("true");
       }else{
        appear1.push("false");
      }
    if('santorini'.includes(searches[searches.length-1])){
      appear1.push("true");
    
       }else{
        appear1.push("false");
      }
    if('annapurna'.includes(searches[searches.length-1])){
      appear1.push("true");
       }else{
        appear1.push("false");
      }
    if('bali'.includes(searches[searches.length-1])){
      appear1.push("true");
       }else{
        appear1.push("false");
      }
    res.render('searchresults',{appear:appear1})
    appear1=[];
  }else{
    res.redirect('/')
  }});
app.post('/search', function(req,res){
var searched=req.body.Search.toLowerCase();
searches.push(searched);
res.redirect("/search");
});

app.get('/wanttogo' ,async function(req,res){
  if(!req.session.userid ){
    res.redirect('/');
  return;
  }
  res.render('wanttogo');
  });

app.post('/' , function(req,res){
  const username= req.body.username;
  var password=  req.body.password;
  if(username=='admin'&&password=='admin'){
    req.session.userid='admin'; 
    res.redirect('/home');
  }
    else 
    res.render('login',{login_message:"Please Try Again Password or username might be wrong"});
});
app.post('/registration' , function(req,res){
  var usernameregistered= req.body.username;
  var passwordregistered= req.body.password;
  if(usernameregistered == '' || passwordregistered =='')
    {
      res.render('registration',{register_message:"Please Enter the Username & the Password"})
    }
    else{ 
    
}
});
app.post('/bali' , function(req,res){
  res.render('bali',{message:" "});
});
app.post('/paris' , function(req,res){
  res.render('paris',{message:" "});

});
app.post('/rome' , function(req,res){
  res.render('rome',{message:" "});
});
app.post('/annapurna' , function(req,res){
  res.render('annapurna',{message:" "});
});
app.post('/inca' , function(req,res){
  res.render('inca',{message:" "});
});
app.post('/santorini' , function(req,res){
  res.render('santorini',{message:" "});
});
function addtowanttogo(dist){
   
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
