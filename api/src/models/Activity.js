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
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false,
    },
    Duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Temporada: {
      type: DataTypes.ENUM('Summer', 'Winter', 'Autumn', 'Spring'),
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};;
