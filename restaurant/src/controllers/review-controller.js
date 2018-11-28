'use strict';

const repository = require('../repositories/review-repository');

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            user: req.body.user,
            rating: req.body.rating,
            plate: req.body.plate 
        });
        res.status(201).send({message: 'Avaliação cadastrada com sucesso!'});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};

exports.getRating = async(req, res, next) => {
    try{

        const data = await repository.getByPlate(req.params.plate);

        let sum = 0;
        data.map((item) => {
            sum += item.rating;
        });
        const result = sum / data.length;

        res.status(200).send({
            rating: result
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao prosseguir sua requisição'
        });
    }
};