'use strict';

const repository = require('../repositories/user-repository');
const md5 = require('md5');

exports.post = async(req, res, next) => {

    try {
        await repository.create({
            name: req.body.name,
            password: md5(req.body.password + global.SALT_KEY),
            is_restaurant: req.body.is_restaurant,
            favorite_food: req.body.favorite_food,
        });
        res.status(201).send({message: 'Usuário cadastrado com sucesso!'});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body)
        res.status(200).send({message: 'Usuário atualizado com sucesso!'});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};