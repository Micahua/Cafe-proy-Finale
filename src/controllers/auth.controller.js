import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/**
 * Usuario mock (para el ejemplo) 
 */
const userMock = {
    id: 1,
    email: "admin@admin.com",
    passwordHash: bcrypt.hashSync("1234", 10),
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Email y password requeridos" });
    }

    if (email !== userMock.email) {
        return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const validPassword = await bcrypt.compare(password, userMock.passwordHash);

    if (!validPassword) {
        return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const payload = {
        id: userMock.id,
        email: userMock.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({
        token,
        type: "Bearer",
    });
};
