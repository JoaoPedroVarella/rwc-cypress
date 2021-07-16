class Routes{

    as = {
        postArticle: 'POSTArticle',
        getArticleTitle: 'GETArticleTitle',
        getArticleTitleComments: 'GETArticleTitleComents'
    }
    
    init(){
        //utilizar o ** para reaproveitamento de rotas -> está dizendo que não importa o host da api, portanto se mudar de ambiente ainda fucionará
        cy.server();
        cy.route('POST', '**/api/aticles').as(this.as.postArticle)
        cy.route('GET', `**/api/aticles/${name}-**`).as(this.as.getArticleTitle)
        cy.route('GET', `**/api/aticles/${name}-**/coments`).as(this.as.getArticleTitleComments)
    }
}


export default new Routes()