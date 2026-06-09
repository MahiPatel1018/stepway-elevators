const db = require("../config/db");

const saveContact = (data, callback) => {
  const { name, email, phone, subject, message } = data;

  const sql = `
    INSERT INTO contacts
    (name, email, phone, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, subject, message],
    callback
  );
};

module.exports = {
  saveContact,
};