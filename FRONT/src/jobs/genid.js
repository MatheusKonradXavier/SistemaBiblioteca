const axios = require('../../apiConnect');

const uuid = async () => {
    const uuid = await axios.get('/genid');
    return uuid;
}  

module.exports = uuid;