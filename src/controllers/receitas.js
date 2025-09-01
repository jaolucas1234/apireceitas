const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (req, res) => {
    const receitas = await prisma.receita.findMany();
    res.json(receitas);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const receita = await prisma.receita.findUnique({
        where: { id: Number(id) }
    });
    res.json(receita);
};

const post = async (req, res) => {
    const receita = await prisma.receita.create({
        data: req.body
    });
    res.status(201).json(receita);
};


const updateById = async (req, res) => {
    const { id } = req.params;
    const receita = await prisma.receita.update({
        where: { id: Number(id) },
        data: req.body
    });
    res.json(receita);
};

const deleteById = async (req, res) => {
    const { id } = req.params;
    await prisma.receita.delete({
        where: { id: Number(id) }
    });
    res.status(204).send();
};

module.exports = {
    getAll,
    getById,
    post,
    updateById,
    deleteById
};