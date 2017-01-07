const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs')

router.use(express.static('sites/coltenj.com/'))

//if the route reaches this catchall, send 404
router.get('*', (req,res,next)=>{
  res.sendStatus(404);
})


module.exports = router;