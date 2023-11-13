const express = require("express");
const router = express.Router();

// Datos de ejemplo (lista de usuarios)
const users = [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
];


router
    .route('/')
    .get((req, res) => {
        res.json(users);
    })

module.exports = router;