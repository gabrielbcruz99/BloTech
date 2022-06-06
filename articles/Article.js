const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//Relacionamentos com Sequelize
Category.hasMany(Article); // hasMany significa tem muitos, ou seja, que Uma categoria tem muitos artigos
Article.belongsTo(Category); // Um artigo pertence a uma categoria - Relacionamento 1 - 1

 

module.exports = Article;