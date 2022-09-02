'use strict';

var Usuario = require('../modelos/usuarios');

function inicio(req, res) {
	res.status(200).send({
		nome: 'luis',
		idade: '18',
		apelido: 'luix',
	});
}

function teste(req, res) {
	res.status(200).send({
		message: 'Apenas um teste de rota!',
	});
}

module.exports = { inicio, teste };
