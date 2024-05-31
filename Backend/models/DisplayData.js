const express = require('express')
const router = express.Router()


router.post('/ticketsData',(req,res)=>{
    try {
        console.log(global.tickets)
        res.send([global.tickets])

    }catch(error){
        console.error(error.message);
        res.send("Server Error")
    }
})

module.export = router;