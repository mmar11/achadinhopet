let infocontroller = {
    index2: (req, res) => {
        let info = {
            alunos: ['Emile', 'Marcelo', 'Pedro', 'Leonardo'],
            quarto: [1, 1, 3, 2],
            idade: [25, 36, 12, 18]
        }


        res.render('index2', info)
    }
}

module.exports = infocontroller