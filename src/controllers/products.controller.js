import * as model from "../models/products.model.js";

export const getAll = async (req, res) => {
    try {
        const products = await model.getAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await model.getById(id);

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(product);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const create = async (req, res) => {
    try {
        const { name, price, categories = [] } = req.body;

        if (!name) {
            return res.status(422).json({ error: "El Nombre es Obligatorio" });
        }

        const product = await model.create({ name, price, categories });
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updated = await model.update(id, data);

        if (!updated) {
            return res.status(404).json({ error: "Not Found - Update" });
        }

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.remove(id);

        if (!deleted) {
            return res.status(404).json({ error: "Not Found - Delete" });
        }

        res.json({ message: "Producto Eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
