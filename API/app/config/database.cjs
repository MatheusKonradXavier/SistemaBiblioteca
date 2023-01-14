require('dotenv').config();

module.exports = {
   dialect: 'mariadb',
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   username: process.env.DB_USER,
   password: process.env.DB_PWD,
   database: process.env.DB_NAME,
   dialectOptions: {
     timezone: 'America/Sao_Paulo',
   },
   timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

}