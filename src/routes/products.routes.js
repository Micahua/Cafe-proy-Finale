import { Router } from "express";
import {
    getAll,
    getById,
    create,
    update,
    remove,
} from "../controllers/products.controller.js";

import { authMiddleware } from "../auth/auth.middleware.js";

const router = Router();

// públicas
router.get("/products", getAll);
router.get("/products/:id", getById);

// protegidas
router.post("/products", authMiddleware, create);
router.put("/products/:id", authMiddleware, update);
router.delete("/products/:id", authMiddleware, remove);

export default router;

