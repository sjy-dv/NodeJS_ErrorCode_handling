const error_code = require('./err_code.json');

module.exports = (function(){

    const H = {};

    H.errorHandler = (err,req) => {
        let code = 1;
        if(err.code) {
            code = err.code;
        }else{
        
        }
        return { code, error : error_code[code]}
    };

    H.responseHandler = res => {
        return {};
    };

    return H;

})();