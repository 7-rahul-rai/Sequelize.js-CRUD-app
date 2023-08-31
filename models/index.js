const {Sequelize,DataTypes,Model} = require('sequelize')

const sequelize = new Sequelize('sequelizedb','root','12345',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

try{
sequelize.authenticate()
console.log('Connection is established')
}
catch(error){
    console.log(error)
}

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync()
// db.sequelize.drop();

db.User = require('./user')(sequelize,DataTypes)

module.exports = db;