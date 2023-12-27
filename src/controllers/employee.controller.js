import { pool } from "../db.js";

export const getEmployee = async (req, res) => {
  try {
    const [a] = await pool.query("select * from products");
    res.json(a);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [a] = await pool.query("select * from products where id=?", [id]);

    if (a.length == 0) {
      res.status(404).json({ message: "not found" });
    } else {
      res.json(a[0]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, description, img, price } = req.body;
    const [a] = await pool.query(
      "insert into products(name,description,img,price) values(?,?,?,?)",
      [name, description, img, price]
    );
    res.json({
      id: a.insertId,
      name,
      description,
      img,
      price,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updareEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, img, price } = req.body;

    const [result] = await pool.query(
      "UPDATE  products set name=ifnull(?,name) , description=ifnull(?,description), img=ifnull(?,img) , price=ifnull(?,price) where id=?",
      [name, description, img, price, id]
    );

    if (result.affectedRows <= 0) {
      res.status(404).json({ message: "employee not found" });
    } else {
      const [rows] = await pool.query("SELECT * FROM products where id=?", [
        id,
      ]);

      res.json(rows);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [a] = await pool.query("delete from products where id=?", [id]);

    if (a.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
