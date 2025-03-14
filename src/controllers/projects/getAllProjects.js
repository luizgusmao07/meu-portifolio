import { pool, loadQuery } from "../../db/config/connectDB.js"

export const getAllProjects = async (req, res) => {
    try {
        const query = await loadQuery('getAllProjects.sql');
        const result = await pool.query(query);

        res.status(200).json({ message: "Projetos consultados com sucesso:", data: result.rows })
    } catch (error) {
        res.status(400).json({ message: "Erro ao consultar projetos", error: error.message })
    }

}