const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: { attributes: []}, 
        }
      ]
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(400),json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: Product
    });
    if(!tag) {
      res.status(404).json({message: 'Tag not Found'});
    } else {
      res.status(200).json(tag);
    }
  } catch(err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag)
  } catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id)
    if(!tag) {
      res.status(404).json({message: 'Tag not found'});
    } else {
      tag.update(req.body);
      res.status(200).json(tag);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);
    if(!tag) {
      res.status(404).json({message: 'Tag not found'});
    } else {
      tag.destroy();
      res.status(200).json({message:'Deleted successfully'})
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;