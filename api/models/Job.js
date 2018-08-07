/**
 * Job.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type: 'string',
      required: true
    },
    phone: {
      type: 'number'
    },
    city: {
      type: 'string'
    }

  },

  addData: (data,cb) =>{
    let params = data;
    if(!params.name){
      sails.log('No name is there----->',params.name);
      return cb(err);  
    }
    Job.create(params).fetch().exec(function(err,result){
    if(err)
      return cb(err);
      return cb(null,result);
    });
  },

search : function(data,callback){
  Job.find().where({id: data.id}).exec(function(err,result){
    if(err){
      callback(err);
    }
    else{
      sails.log("----->",result);
      callback(null, result);
    }
  })
},

updating: function(data, callback)  {
  sails.log("data :",data);
  let attributes = {};
  if(data.name){
    attributes.name = data.name
  }
  if(data.phone){
    attributes.phone = data.phone
  }
  if(data.city){
    attributes.city = data.city
  }
  sails.log(attributes);
    Job.update({id: data.id},
      attributes
    ).fetch().exec(function(err,result){
      sails.log('Inside of update');
      if(err){
        callback(err);
      }
      else{
        sails.log("----->",result);
        callback(null, result);
    }
  })
},


deleting: function(data, callback){
  sails.log("data :",data);
  Job.destroy({id: data.id}).fetch().exec(function(err,result){
    if(err){
      callback(err);
    }
    sails.log("result :",result);
    callback(result);
  });
}
};

