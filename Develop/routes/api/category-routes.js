const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  // find all categories and include their associated Products
  try {
    const categories = await Category.findAll({
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single category by its `id`
router.get('/:id', async (req, res) => {
  // find one category by its `id` value and include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  // create a new category with the data provided in the request body
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a category by its `id`
router.put('/:id', async (req, res) => {
  // find the category by its `id` and update it with the data provided in the request body
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      await category.update(req.body);
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a category by its `id`
router.delete('/:id', async (req, res) => {
  // find the category by its `id` and delete it
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      await category.destroy();
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
