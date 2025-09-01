const express = require('express');
const router = express.Router();

const Receita = require('./controllers/receitas');

router.get('/receitas', Receita.getAll);
router.get('/receitas/:id', Receita.getById);
router.post('/receitas', Receita.post);
router.put('/receitas/:id', Receita.updateById);
router.delete('/receitas/:id', Receita.deleteById);

router.get('/', async (req, res) => {
    const rotas = {
        receitasapi: '/',
        receitas: '/receitas',
    }
    res.json(rotas);
});

module.exports = router;