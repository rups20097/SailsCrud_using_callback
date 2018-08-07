/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    add(req,res) {
        Job.addData(req.body, function(err,result){
            if(err)
                return res.serverError(err);
            return res.ok(result);
        });
    },



    search : function(req, res){
        Job.search(req.body,function(err, result){					// This will go to Test.js
          if(err){
            res.serverError(err);
          }
          else{
            res.json(result);
          }
        })
      },


      updated: (req,res) => {
        Job.updating (req.body, function(err,result){
            if(err) {
                res.serverError(err);
            }
            res.json(result);
        });
      },


      deleted: (req,res) => {
        Job.deleting (req.body, function(err,result){
            if(err) {
                res.serverError(err);
            }
            res.json(result);
        });
      },
      

};

