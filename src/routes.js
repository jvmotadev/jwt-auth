const express = require("express");
const { login, protectedContent, dateProtectedContent, textProtectedContent } = require("./controllers/authController");

const router = express.Router();

// Rota pública
router.get("/", (request, response) => {
  response.json({ message: "Endpoint que não exige autenticação!" });
});

// Rota de login
router.post("/login", login);

// Rota protegida
router.get("/protected", protectedContent);

// Rota protegida 2
router.get("/protectedDate", dateProtectedContent);

// Rota protegida 3
router.get("/protectedText", textProtectedContent);

module.exports = router;
