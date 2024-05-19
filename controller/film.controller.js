const model = require('../models');

class Film {
    static async getAllFilms(req, res) {
        const data = await model.film.findAll();
        res.status(200).json(data)
    }

    static async getFilmById(req, res) {
        const { id } = req.params
        const data = await model.film.findByPk(id)
        res.status(404).json(data)
    }

    static async getFilmByCategory(req, res) {
        const categoryName = req.query.search ? req.query.search.toLowerCase() : null;

        if (!categoryName) {
            return res.status(400).json({ message: "masukan category: /films/category?search=(nama category film)" });
        }

        try {
            const data = await model.film.findAll({
                include: [{
                    model: model.category,
                    where: model.sequelize.where(
                        model.sequelize.fn('LOWER', model.sequelize.col('name')),
                        categoryName
                    ),
                    through: { attributes: [] }
                }]
            });

            if (data.length === 0) {
                res.json({
                    message: "film not found!"
                });
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            console.log(error);
            res.json({ message: 'error' });
        }
    }
}

module.exports = Film;