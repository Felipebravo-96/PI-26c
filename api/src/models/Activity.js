const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Duracion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Temporada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};;
