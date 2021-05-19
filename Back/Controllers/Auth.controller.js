const connection = require('../Db/connection');

const createUser = (req, res) => {
    const { name, password, role, mail, phone } = req.body 
    
    const sql = 'INSERT INTO tbl_users SET ?';

    const dataObject = {
        name: name,
        password: password,
        role: role,
        mail: mail,
        phone: phone,
        date_update: new Date(),
        date_created: new Date()
    };

    connection.query(sql, dataObject, error => {
        if (error) {error};
        res.status(200).json({
            status: 200,
            data: "User created successfully"
        });
    });
}

const loginUser = (req, res) => {
    const {mail, password} = req.body;
    // Check if exist mail
    let sql = `SELECT id, name, role FROM tbl_users WHERE mail = '${mail}'`;
    connection.query(sql, (error, response) => {
        if (error) {error};
        if (response.length > 0) {
            // Check if exist mail and pass
            sql = `SELECT id, name, mail, role FROM tbl_users WHERE mail = '${mail}' AND password = '${password}'`;
            
            connection.query(sql, (error, response) => {
                if (error) {error};
                if (response.length > 0) {
                    res.status(200).json({
                        status: 200,
                        data: response
                    });
                } else {
                    res.status(401).json({
                        status: 401,
                        data: "Password incorrect"
                    }); 
                }
            });
        } else {
            res.status(401).json({
                status: 401,
                data: "Mail not registered"
            }); 
        }
    });
}

module.exports = { loginUser, createUser }