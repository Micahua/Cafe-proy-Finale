import "dotenv/config";
import express from "express";
import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api", authRoutes);

app.get("/ping", (req, res) => {
    res.json({ pong: true });
});

app.use("/api", productsRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Servidor en http://localhost:${PORT}`)
);
