//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
const Product = require("../models/product.model.js");

//Require the test-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Products', () => {
    before((done) => { //Before test we reset the productViewed as 0
        Product.resetProductViewed({}, (err, data) => { 
           done();           
        });        
    });

  /*
  * Test the /GET all products first time when no one viewd as single page
  */
  describe('/GET all products at first time when no one viewed as single page', () => {
    it('it should GET none of the products', (done) => {
      chai.request(app)
          .get('/api/products/')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
            done();
          });
    });
});

  /*
  * Test the /GET product route
  */
  describe('/GET product details at first time and productViewed auto increment once its viewed by the user', () => {
    it('it should GET product of id 1', (done) => {
      chai.request(app)
          .get('/api/products/1')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
});

 /*
  * Test the /GET all products route
  */
  describe('/GET all products at second time when only single user viewed', () => {
      it('it should GET single product', (done) => {
        chai.request(app)
            .get('/api/products/')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(1);
              done();
            });
      });
  });

    /*
  * Test the /GET product route
  */
    describe('/GET product details at second time and viewd auto increment once its viewd by the user', () => {
      it('it should GET product of id 2', (done) => {
        chai.request(app)
            .get('/api/products/2')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
  });
  
   /*
    * Test the /GET all products route
    */
    describe('/GET all products when secont times user viewed the product details', () => {
        it('it should GET two products ', (done) => {
          chai.request(app)
              .get('/api/products/')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                done();
              });
        });
    });

});