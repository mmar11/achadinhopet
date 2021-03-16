const petsController = {
    indexpets: (req, res) => {

        const animais = [{ titulo: 'cachorro', imagem: "https://thumbs.dreamstime.com/b/running-dogs-19923945.jpg" }, { titulo: 'gato', imagem: "https://thumbs.dreamstime.com/b/grey-cat-25625964.jpg" }, { titulo: 'aves', imagem: "https://thumbs.dreamstime.com/b/yellow-bird-29110651.jpg" }, { titulo: 'reptil', imagem: "https://thumbs.dreamstime.com/b/reptil-animal-small-exotic-pet-farm-orange-skin-animal-reptil-animal-small-exotic-pet-169932685.jpg" }, { titulo: 'outros', imagem: "https://thumbs.dreamstime.com/b/funny-portrait-group-farm-animals-isolated-white-background-111932587.jpg" }, { titulo: 'iguana', imagem: "https://thumbs.dreamstime.com/b/iguana-19941342.jpg" }, { titulo: 'peixes', imagem: "https://thumbs.dreamstime.com/b/tropical-fishes-closeup-colorful-swimming-aquarium-40893321.jpg" }, { titulo: 'dinos', imagem: "https://thumbs.dreamstime.com/b/dinosaur-toy-29247142.jpg" }]

        res.render('indexpets', { animais })
    }
}

module.exports = petsController