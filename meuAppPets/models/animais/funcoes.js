// (req, res) => {
//     let { nome, especie } = req.body
//     let base

//     let leitorBase = () => {
//         return new Promise((resolve, reject) => {
//             fs.readFile(animaisJSON, { encoding: 'utf-8' }, (error, data) => {
//                 if (error) { reject(error) } else { resolve(data) };
//             })
//         })
//     }



//     leitorBase().then((data) => {
//         base = JSON.parse(data)
//         console.log(base)
//         console.log(data)


//     })

//     // usada como teste para validar usuario -- incluir em area logada
//     // ao criar o usuario, deve ser executada uma função para criar um arquivo animais.json com [] dentro do usuário
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



module.exports = { valida }