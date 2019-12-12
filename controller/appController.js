'use strict'

const dbConnection = require('../util/db');
const queries = require('../models/appModel');

module.exports = class Forex{
    async readAll() {
        let con  =await dbConnection();
        try{
            await con.query("START TRANSACTION");
            let todo = await con.query(queries.read_all);
            await con.query("commit");
            todo = JSON.parse(JSON.stringify(todo));
            return todo;
        }catch (ex) {
            console.log(ex);
            throw ex;
        }finally {
            await con.release();
            await con.destroy();
        }
    }
}
