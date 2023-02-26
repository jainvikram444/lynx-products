const fetch = require('node-fetch');
const { json } = require("express");
const config = require('config');
//process.env["NODE_CONFIG_DIR"] = __dirname + "./config/env/";

module.exports = {
    /*
    ** This method returns a current existing exaching rate 
    */
    get_current_exchange_rate: function () {
        return new Promise((resolve, reject) => {
            let myHeaders = new fetch.Headers(),
                base_url = config.get("EXCHANGE.BASE_URL"),
                api_name = config.get("EXCHANGE.CONVERT_API"),
                from = "CAD",
                to = "USD",
                amount = 1
                ;

            myHeaders.append("apikey", config.get("EXCHANGE.AUTH_KEY"));

            let requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            let url = `${base_url}/${api_name}?to=${to}&from=${from}&amount=${amount}`;
            console.log(url);

            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    jsonResp = JSON.parse(result);
                    console.log(jsonResp.result);
                    resolve(jsonResp.result);
                })
                .catch(error => {
                    console.log('error', error);
                    reject(err)
                });
        });
    }
}