const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')

const saltRounds = 12

let passCript = bcrypt.hashSync('Senha100', saltRounds)
console.log(passCript)


// let compara = bcrypt.compareSync('Senha100', passCript)
// console.log(compara)

// let caminhoAnimais = path.join('../Dados/baseteste.json')

// fs.writeFileSync(caminhoAnimais, "[]")

// let conteudo = fs.readFileSync(caminhoAnimais, { encoding: 'utf-8' })
// console.log(conteudo)