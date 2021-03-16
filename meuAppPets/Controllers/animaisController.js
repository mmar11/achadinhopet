// let perdidos = require('../Dados/baseperdidos')

const path = require('path')
const fs = require('fs')
const { json } = require('express')
let animaisJSON = path.join('Dados', 'animais.json')

console.log(animaisJSON)

const animaisController = {
    consultaquery:
        (req, res, next) => {
            let query = req.query
            res.render('animais', query)
        },

    cadastro: (req, res, next) => {
        res.render('cadastroAnimais')
    },
    cadastrado: (req, res, next) => {
        let query = req.query
        res.render('cadastrado', req.body)
    },
    salvar: (req, res) => {
        let { nome, especie } = req.body

        let base = fs.readFileSync(animaisJSON, { encoding: 'utf-8' });
        base = JSON.parse(base)
            // usada como teste para validar usuario -- incluir em area logada
            // ao criar o usuario, deve ser executada uma função para criar um arquivo animais.json com [] dentro do usuário

        let valida = base.find((atual) => {
            if (nome == atual.nome) { return true }
        })


        let dadosAnimal



        let cadastra = () => {
            if (base == "") {
                base.push(req.body)
                dadosAnimal = JSON.stringify(base)
                fs.writeFileSync(animaisJSON, dadosAnimal)
            } else if (base != "" & valida == undefined) {
                base.push(req.body)
                dadosAnimal = JSON.stringify(base);
                fs.writeFileSync(animaisJSON, dadosAnimal)
            } else if (base != "" & valida != undefined) {
                res.send('animal ja cadastrado')
            }
        }




        cadastra()
        console.log(base)
        console.log(dadosAnimal)
        console.log(valida)
        res.render('cadastrado', req.body)
    },

    sucesso: (req, res) => {
        // res.render('cadastrado')


    },

    editar: (req, res) => {
        let perdidos = [{
            id: 1,
            nome: 'paulo',
            especie: 'cachorro'
        }, {
            id: 2,
            nome: 'carlos',
            especie: 'gato'
        }, {
            id: 3,
            nome: 'pedro',
            especie: 'ave'
        }]



        let { id } = req.params;

        res.render('editaranimal', { animal: perdidos[id - 1] })



    },
    editarput: (req, res) => {
        res.send('animal editado' + req.body.nome)

    },

    listarAnimais: (req, res) => {
        let perdidos = fs.readFileSync(animaisJSON, { encoding: 'utf-8' })
        perdidos = JSON.parse(perdidos)
        res.render('./Deletar/listaranimais', { perdidos })

    },
    deletarAnimal: (req, res) => {
        let { id } = req.params;

        res.send('estou deletando o animal id: ' + id)

    }

}

module.exports = animaisController