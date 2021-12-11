const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let request = require('request');
router.use(bodyParser.json());


router.post('/get_pincode_details',(req,res)=>{
  console.log('inside API',req.body.pincode);
  try {
    request({
      uri:`https://api.postalpincode.in/pincode/${req.body.pincode}`,
      method: 'GET',
      json: {},
    },(err,response,body) => {
      if(err) {
        console.log(err);
        throw err;
      }
      else if(response.statusCode == 200) {
        console.log({'Response': body});
        res.status(200).send({body});
      }
      else {
        console.log(response.statusCode);
      }
    }) 
  } catch (error) {
    console.log("Error in API :",err);
    res.status(404).send('Error',error);
  }

})

module.exports = router;