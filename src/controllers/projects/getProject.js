import { loadQuery, pool } from "../../db/config/connectDB.js";

export const getProject = async (req, res) => {
    try {
        const id = req.params.id;

        const query = await loadQuery('getProject.sql');
        const result = await pool.query(query, [id]);

        res.status(200).json({ message: "Projeto consultado com sucesso:", data: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: "Erro ao consultar projeto", error: error.message });
    }
}