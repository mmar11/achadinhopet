// let perdidos = require('../Dados/baseperdidos')

const path = require('path')
const fs = require('fs')
const { json } = require('express')
const { resolve } = require('path')
const { rejects } = require('assert')
const { Console } = require('console')
let animaisJSON = path.join('Dados', 'animais.json')
let models = require('../models/animais/funcoes')



const animaisControllerAsync = {
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


        let leitorBase = (file) => {
            return new Promise((resolve, reject) => {
                fs.readFile(file, { encoding: 'utf-8' }, (error, data) => {
                    if (error) { reject(error) } else { resolve(data) };
                })
            })
        }

        let consultBase = async() => {

            try {
                let base = await leitorBase(animaisJSON);
                base = JSON.parse(base)
                console.log(base)
                return base
            } catch (error) {
                console.error(error);
            }
        }



        let insere = async() => {

            try {

                let dadosAnimal;

                if (consulta == "") {
                    item.push(req.body)
                    dadosAnimal = JSON.stringify(base)
                    fs.writeFileSync(animaisJSON, dadosAnimal)
                } else if (file != "" & validou == undefined) {
                    file.push(req.body)
                    dadosAnimal = JSON.stringify(file);
                    fs.writeFileSync(animaisJSON, dadosAnimal)
                } else if (file != "" & validou != undefined) {
                    res.send('animal ja cadastrado')
                }

            } catch (error) {
                console.error(error);
            }


        }

        let validaAnimal = async(nome) => {
            let consulta = await consultBase()
            console.log(consulta)
            try {

                let validou = consulta.find((atual) => {

                    if (nome == atual.nome) {
                        return true
                    }

                })
                console.log(validou)

                let dadosAnimal;

                if (consulta == "") {
                    consulta.push(req.body)
                    console.log(consulta)
                    dadosAnimal = JSON.stringify(consulta)
                    fs.writeFileSync(animaisJSON, dadosAnimal)


                } else if (consulta != "" & validou == undefined) {
                    consulta.push(req.body)
                    dadosAnimal = JSON.stringify(consulta);
                    fs.writeFileSync(animaisJSON, dadosAnimal)

                } else if (consulta != "" & validou != undefined) {
                    res.send('animal ja cadastrado')
                }



            } catch (error) {
                console.error(error);
            }
            res.render('cadastrado', req.body)
                // res.send(consulta)
        }

        validaAnimal(nome)



        let valida = (atr, file) => {
            let validou = file.find((atual) => {
                if (atr == atual.nome) { return true }
            })
            let dadosAnimal;

            if (file == "") {
                file.push(req.body)
                dadosAnimal = JSON.stringify(file)
                fs.writeFileSync(animaisJSON, dadosAnimal)
            } else if (file != "" & validou == undefined) {
                file.push(req.body)
                dadosAnimal = JSON.stringify(file);
                fs.writeFileSync(animaisJSON, dadosAnimal)
            } else if (file != "" & validou != undefined) {
                res.send('animal ja cadastrado')
            }


        }


        // console.log(data)

        // return valida(nome, base)


        // usada como teste para validar usuario -- incluir em area logada
        // ao criar o usuario, deve ser executada uma função para criar um arquivo animais.json com [] dentro do usuário




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

module.exports = animaisControllerAsync