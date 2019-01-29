// Sequelize Model TeeTime that will store the data for each round of golf that is scheduled.
module.exports = function(sequelize, DataTypes) {
  var weight = sequelize.define("weights", {
    // ALl data points are being stored as strings, integers or booleans
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return weight;
};
