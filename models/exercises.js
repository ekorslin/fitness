// Sequelize Model TeeTime that will store the data for each round of golf that is scheduled.
module.exports = function(sequelize, DataTypes) {
  var exercise = sequelize.define("exercise", {
    // ALl data points are being stored as strings, integers or booleans
    description: DataTypes.STRING,
    bodyGroup: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
  });
  return exercise;
};
