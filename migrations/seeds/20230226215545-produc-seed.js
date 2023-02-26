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
  db.insert('product', {
    "id": 1,
    "name": "Kawasaki Ninja 650",
    "price": 6.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 2,
    "name": "Kawasaki Ninja 750",
    "price": 7.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 3,
    "name": "Kawasaki Ninja 850",
    "price": 8.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 4,
    "name": "Kawasaki Ninja 950",
    "price": 9.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 5,
    "name": "Kawasaki Ninja 1050",
    "price": 10.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 6,
    "name": "Kawasaki Ninja 1150",
    "price": 11.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 7,
    "name": "Kawasaki Ninja 1250",
    "price": 12.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 8,
    "name": "Kawasaki Ninja 1350",
    "price": 13.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 9,
    "name": "Kawasaki Ninja 1450",
    "price": 14.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
  db.insert('product', {
    "id": 10,
    "name": "Kawasaki Ninja 1550",
    "price": 15.5, 
    "description": null, 
    "isDeleted": 0, 
    "productViewed": 0, 
    "createdDate": '2022-07-07 00:00:00', 
    "updatedDate": '2022-07-07 00:00:00', 
    "deletedDate": null
  }, callback);
};

exports.down = function(db, callback) {
  db.delete('product', 1);
};

exports._meta = {
  "version": 1
};
