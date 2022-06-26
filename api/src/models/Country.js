const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Idc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Flag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "undefined"
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "undefined"
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "undefined"
    },
    Subregion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "undefined"
    },
    Area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FlagImg: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "undefined"
    },
  },{
    timestamps: false,
  });
};