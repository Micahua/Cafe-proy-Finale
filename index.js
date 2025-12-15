import "dotenv/config";
import express from "express";
import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", productsRoutes);


app.get("/products", (req, res) => {
    res.json(products);
});


app.use((req, res) => {
    //  res.status(404).json({ error: "Not Found" });
    res.status(404).json({
        error: "Ruta no encontrada",
        method: req.method,
    });


});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Servidor en http://localhost:${PORT}`)
);
