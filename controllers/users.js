const db = require('../database');

const getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Internal server error!');
        }
        res.json(result);
    });
};

const createUser = (req, res) => {
    const { name, email, role_id } = req.body;
    db.query(
        'INSERT INTO users (name, email, role_id) values (?,?,?)',
        [name, email, role_id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server error!');
            }
            res.status(201).send('User created successfully!');
        }
    );
};

const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    db.query(
        'UPDATE users SET name = ?, email = ? where id = ?',
        [name, email, userId],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server error!');
            }
            if (result.affectedRows === 0) {
                return res.status(404).send('User not found.');
            }
            res.send('User updated successfully!');
        }
    );
};

const deleteUser = (req, res) => {
    db.query(
        'DELETE FROM users where id = ?',
        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server code');
            }

            if (result.affectedRows === 0) {
                return res.status(404).send('user not found');
            }
            res.send('user is deleted!');
        }
    );
};

const getUser = (req, res) => {
    db.query(
        'SELECT * FROM users WHERE id = ?',
        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server code');
            }

            if (result.length == 0) {
                return res
                    .status(404)
                    .send(`User with id: ${req.params.id} is not found!`);
            }

            res.json(result);
        }
    );
};

const getUserByName = (req, res) => {
    console.log(req.query);

    if (!req.query.name) {
        return res.status(404).send('Name filter is not found.');
    }

    const pattern = `%${req.query.name}%`;
    db.query(
        'Select * from users where name like ?',
        [pattern],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server code');
            }

            if (result.length !== 0) {
                res.json(result);
            } else {
                res.status(404).send(
                    'User with name ' + req.query.name + ' not found'
                );
            }
        }
    );
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUserByName,
};