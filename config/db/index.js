const mongoose = require('mongoose')
var isProduction = process.env.NODE_ENV === 'production';

  mongoose.connect('mongodb+srv://food:food123@foodorder.38clb.mongodb.net/foodOrder?retryWrites=true&w=majority',{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
(err,db)=>{
    if(!err)
    {
      console.log('Database connected successfully');
    }else{
            console.log('mongoose connection failed')
    }
  });
  mongoose.set('debug', true);
