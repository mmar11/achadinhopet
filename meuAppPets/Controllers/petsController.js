const petsController = {
    indexpets: (req, res) => {

        const animais = [{ titulo: 'cachorro', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }, { titulo: 'gato', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }, { titulo: 'aves', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }, { titulo: 'reptil', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }, { titulo: 'outros', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }, { titulo: 'iguana', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }, { titulo: 'peixes', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }, { titulo: 'dinos', imagem: "https://img.freepik.com/vetores-gratis/cursos-para-desenvolvedores-web-programacao-de-computadores-web-design-script-e-estudo-de-codificacao-componentes-da-estrutura-da-interface-de-aprendizagem-do-aluno-de-ciencia-da-computacao_335657-1161.jpg?size=338&ext=jpg" }]

        res.render('indexpets', { animais })
    }
}

module.exports = petsController