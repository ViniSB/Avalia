'use strict';

const repository = require('../repositories/plate-repository');

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            description: req.body.description,
            restaurant: req.body.restaurant 
        });
        res.status(201).send({message: 'Prato cadastrado com sucesso!'});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body)
        res.status(200).send({message: 'Prato atualizado com sucesso!'});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};

exports.getPlates = async(req, res, next) => {
    try{
        var data = await repository.getPlates(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};

exports.getByPlate = async(req, res, next) => {
    try{
        var data = await repository.getByPlate(req.params.plate)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};