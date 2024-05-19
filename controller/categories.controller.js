const Model = require('../models');

class CategoriesController {
    static async getAllCategories(req, res) {
        const data = await Model.Category.findAll();
        return res.json(data);
    }
}

module.exports = CategoriesController;