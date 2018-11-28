'use strict';

const repository = require('../repositories/restaurant-repository');

exports.post = async(req, res, next) => {

    try {
        await repository.create({
            name: req.body.name,
            location: req.body.location,
        });
        res.status(201).send({message: 'Restaurante cadastrado com sucesso!'});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body)
        res.status(200).send({message: 'Restaurante atualizado com sucesso!'});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};

exports.getByLocation = async(req, res, next) => {
    try{
        var data = await repository.getByLocation(req.params.location)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};