const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tactivity', {
        name: { 
         type: DataTypes.STRING,
         allowNull: false
    },
        difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        values: [1, 2, 3, 4, 5],
      },
  
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Verano", "Otoño", "Invierno", "Primavera"]
    }

})}
