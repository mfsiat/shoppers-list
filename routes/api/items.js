const express = require('express');
const router = express.Router();

// Item model 
// creates the query 
const Item = require('../../models/Item');


// @route GET api/items
// @desc Get all items 
// @access Public 
// we are using router so router.get
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1})
    .then(items => res.json(items))
});

// @route POST api/items
// @desc create a item 
// @access Public 
// we are using router so router.get
router.post('/', (req, res) => {
  // create a new object
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc delete a item 
// @access Public 
// we are using router so router.get
router.delete('/:id', (req, res) => {
  // we need to find the item 
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}));
});



// this is es6 fashion 
// export default router

// we are not using babel 
// so normally exporting 
module.exports = router;
