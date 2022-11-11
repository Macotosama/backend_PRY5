const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    console.log('Index szzzzz');
    res.send('recived');
});
module.exports = router;