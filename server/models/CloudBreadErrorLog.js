
module.exports = function(sequelize, DataTypes) {
  var CloudBreadErrorLog = sequelize.define('CloudBreadErrorLog', {
    Id : { type : DataTypes.STRING, primaryKey: true, autoIncrement: false}

    , MemberID : { type : DataTypes.STRING}
    , JobID : { type : DataTypes.STRING}

    , Date : { type : DataTypes.DATE}
    , Thread : { type : DataTypes.STRING}
    , Level : { type : DataTypes.STRING}
    , Logger : { type : DataTypes.STRING}
    , Message : { type : DataTypes.TEXT}
    , Exception : { type : DataTypes.TEXT}

  }, {
    timestamps: false,
    tableName: 'CloudBreadErrorLog'
  });
  return CloudBreadErrorLog;
};
