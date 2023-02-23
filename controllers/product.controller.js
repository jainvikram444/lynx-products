const Product = require("../models/product.model.js");
const GetCurrency = require('../lib/get_currency.js')

// Retrieve all Products from the database (with condition).
exports.findAll = (req, res) => {
  const limit = req.query.limit;
  const currency = req.query.currency;

  Product.getAll(limit, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    } else {
      if (currency == "CAD") {
        GetCurrency.get_current_exchange_rate()
        .then(response => {
          console.log(response);
          if (response > 0.0) {
            data.forEach(productData => {
              productData.price = (productData.price * response).toFixed(2);
            });            
          }
          res.send(data);
        })
        .catch(error => {
          res.status(500).send({
            message: `Error retrieving currency exchange rate for id ${req.params.id}.`
          });
        });         
      } else {
        res.send(data);
      } 
    }
  });
};

// Find a single Products with a id
exports.findOne = (req, res) => {
  const currency = req.query.currency;

  Product.updateProductViewedById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.id
        });
      }
    }
  });

  Product.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.id
        });
      }
    } else {
      if (currency == "CAD") {
        console.log(currency);
        GetCurrency.get_current_exchange_rate()
        .then(response => {
          console.log(response);
          if (response > 0.0) {
            data.price = (data.price * response).toFixed(2);
          }
          res.send(data);
        })
        .catch(error => {
          res.status(500).send({
            message: `Error retrieving currency exchange rate for id ${req.params.id}.`
          });
        });         
      } else {
        res.send(data);
      }
    }
  });
};

