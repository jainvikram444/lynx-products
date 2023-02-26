'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('product', {
    id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true},
    name: { type: 'string', length: 150, notNull: true},
    price: { type: 'int', length: 11, defaultValue: null},
    description: { type: 'int', length: 11, defaultValue: null},
    isDeleted: { type: 'int', length: 11, notNull: true, defaultValue: 0},
    productViewed: { type: 'int', notNull: true, defaultValue: 0},
    createdDate: { type: 'datetime', notNull: true},
    updatedDate: { type: 'datetime', notNull: true},
    deletedDate: { type: 'datetime', defaultValue: null}
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('product', callback);
};

exports._meta = {
  "version": 1
};
