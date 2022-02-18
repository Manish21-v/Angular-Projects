const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let request = require('request');
router.use(bodyParser.json());


router.post('/get_pincode_details',async (req,res)=>{
  console.log('inside API',req.body.pincode);
  try {
    let status ;
       await new Promise ((resolve,reject) => {
        request({
        uri:`https://api.postalpincode.in/pincode/${req.body.pincode}`,
        method: 'GET',
        json: {},
      },(err,response,body) => {
        if(err) {
          console.log(err);
          reject(err);
          throw err;
        }
        else if(response.statusCode == 200) {
          console.log('reponse status',response.statusCode);
          console.log({'Response': body});
          status = response.statusCode ;
          resolve(body);
          res.status(200).send({body});
        }
        else {
          console.log(response.statusCode);
          reject('Problem in API');
        }
      }) 
    })
    console.log('status',status);
  } catch (error) {
    console.log("Error in API :",err);
    res.status(404).send('Error',error);
  }

})

module.exports = router;