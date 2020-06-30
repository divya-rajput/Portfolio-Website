const axios = require("axios");

module.exports.worker = () => {
    /*
        Ping the server every minute
    */
    setInterval(() => {
        axios.get("https://divya-rajput.herokuapp.com/health").then(void 0).catch(void 0);
    }, 60000);
}