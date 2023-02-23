const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.name = product.name; 
  this.price = product.price; 
  this.description = product.description; 
  this.isDeleted = product.isDeleted; 
  this.productViewed = product.productViewed; 
  this.createdDate = product.createdDate; 
  this.updatedDate = product.updatedDate; 
  this.deletedDate = product.deletedDate; 
};
 
Product.findById = (id, result) => {
  sql.query(`SELECT * FROM product WHERE isDeleted=false and productViewed > 0 and id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Product with the id
    result({ kind: "not_found" }, null);
  });
};

Product.getAll = (limit, result) => {
  let query = "SELECT * FROM product WHERE isDeleted=false and productViewed > 0  ";

  if (!limit) { 
    limit = 5;
  }

  query += ` limit ${limit}`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.updateProductViewedById = (id, result) => {
  sql.query(
    "UPDATE product SET productViewed = productViewed + 1 WHERE isDeleted=false and id = ?",
    [id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id});
      result(null, { id: id });
    }
  );
};

Product.resetProductViewed = ({}, result) => {
  sql.query(
    "UPDATE product SET productViewed = 0 WHERE isDeleted=false",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Reset productViewed of product: ");
      result(null, { affectedRows: res.affectedRows });
    }
  );
};


module.exports = Product;