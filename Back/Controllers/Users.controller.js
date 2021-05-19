const connection = require('../Db/connection');

const getUsers = (req, res) => {
    let sql = 'SELECT id, name, role, mail, phone, date_update, date_created FROM db_prueba.tbl_users';

    connection.query(sql, (error, response) => {
        if (error) {error};
        if (response.length > 0) {
            res.status(200).json({
                status: 200,
                data: response
            });
        } else {
            res.status(200).json({
                status: 200,
                data: "Not data"
            }); 
        }
    });
}

const getUser = (req, res) => {
    const {id} = req.params;
    const sql = `SELECT id, name, role, mail, phone, date_update, date_created FROM tbl_users WHERE id = ${id}`;

    connection.query(sql, (error, response) => {
        if (error) {error};
        if (response.length > 0) {
            res.status(200).json({
                status: 200,
                data: response
            });
        } else {
            res.status(200).json({
                status: 200,
                data: response
            });
        }
    });
}

const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, role, mail, phone} = req.body;
    let date_update = new Date();
    const sql = `UPDATE tbl_users SET name = '${name}', role = '${role}', mail = '${mail}', phone = '${phone}', date_update = '${date_update}' WHERE id = '${id}'`;
    console.log(sql);
    connection.query(sql , error => {
        if (error) {error};
        res.status(200).json({
            status: 200,
            data: "User updated successfully"
        });
    });
}

const deleteUser = (req, res) => {
    const {id} = req.params;

    const sql = `DELETE FROM tbl_users WHERE id = '${id}'`;
    connection.query(sql , error => {
        if (error) {error};
        res.status(200).json({
            status: 200,
            data: "User deleted successfully"
        });
    });
}

module.exports = { getUsers, getUser, updateUser, deleteUser}