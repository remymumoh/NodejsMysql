'use strict'

const mysql = require('promise-mysql');

const dbConfig = {
    user: 'Enter db username',
    password: 'enter password, leave empty if none used',
    database: 'enter db name',
    host: 'enter host name or ip',
    connectionLimit:10,
    port:5721
};

module.exports = async() =>{
    try{
        let pool;
        let con;
        if(pool) con = pool.getConnection();
        else{
            pool = await mysql.createPool(dbConfig);
            con = pool.getConnection();
        }
        return con;
    }catch (ex) {
        throw ex;
    }
};