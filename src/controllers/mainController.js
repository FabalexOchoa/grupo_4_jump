const path = require('path');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
/*const db = require('../../database/models');
const sequelize = db.sequelize*/
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../database/models');

const mainController = {
	index: (req, res) => {
		res.render('index');
	},
	login: (req, res) => {
		res.render('login');
	},
	productCart: (req, res) => {
		res.render('productCart');
	},

	register: (req, res) => {
		res.render('register');
	},
	search: (req, res) => {
		db.Product.findAll({
			where: {
				name: { [Op.like]: '%' + req.query.search + '%' }
			}
		}).then((products) => res.render('productsIndex', { products }));
	}
};

module.exports = mainController;
