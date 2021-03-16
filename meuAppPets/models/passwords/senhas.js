let bcrypt = require('bcrypt')
let path = require('path')
let fs = require('fs')

let usuarioJSON = path.join('Dados', 'usuarios.json')



let validaS = {
    validaS: (senha) => {

        let usuarios = fs.readFileSync(usuarioJSON, { encoding: 'utf-8' })
        usuarios = JSON.parse(usuarios)

        console.log(bcrypt.compareSync(senha, usuarios.senhaC))

    }
}