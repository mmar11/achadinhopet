const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const { parse } = require('path')
const { check, validationResult, body } = require('express-validator')

let usuarioJSON = path.join('Dados', 'usuarios.json')

let usuarioController = {
    criarUsu: (req, res) => {
        res.render('../views/usuarios/registrousu')

    },

    salvarUsu: (req, res) => {
        const validacaoErros = (validationResult(req))

        if (validacaoErros.isEmpty()) {
            let { nome, email, senha } = req.body;
            let senhaC = bcrypt.hashSync(senha, 10)

            let dadosUsu = JSON.stringify({ nome, email, senhaC })
            fs.writeFileSync(usuarioJSON, dadosUsu)
            res.render('../views/usuarios/login')
        } else {
            res.render('../views/usuarios/registrousu', { errors: validacaoErros.errors })
        }
    },


    loginUsu: (req, res) => {
        res.render('../views/usuarios/login')

    },

    validaUsu: (req, res) => {
        let { email, senha } = req.body;


        let usuarios = fs.readFileSync(usuarioJSON, { encoding: 'utf-8' })
        usuarios = JSON.parse(usuarios)



        let validaS = (senha) => {

            console.log(bcrypt.compareSync(senha, usuarios.senhaC))

        }

        validaS(senha)
        console.log(email)
        console.log(senha)
        console.log(usuarios)



        res.send('validado, inserir view inicial')


    },






}

module.exports = usuarioController