const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs')

router.use(express.static('sites/coltenj.com/'))

router.get('/holo', (req,res) => res.redirect('https://medium.com/@colten_jackson/hello-hololens-creating-holographic-animations-with-python-blender-44d8ba237a2b'))

//if the route reaches this catchall, send 404
router.get('*', (req,res,next)=>{
  res.sendStatus(404);
})


module.exports = router;