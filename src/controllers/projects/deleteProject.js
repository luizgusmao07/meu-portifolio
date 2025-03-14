import { loadQuery, pool } from "../../db/config/connectDB.js";
import { deleteImageCloudinary } from "./functions/deleteImageCloudinary.js";


export const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;

        const findProjectQuery = await loadQuery('getProject.sql');
        const findProjectResult = await pool.query(findProjectQuery, [id]);

        if (findProjectResult.rows.length === 0) {
            return res.status(404).json({ error: "Este projeto não existe" });
        }

        const project = findProjectResult.rows[0];

        const deleteImageResult = await deleteImageCloudinary(project.img_url);

        if (!deleteImageResult) {
            return res.status(500).json({ message: "Erro ao excluir imagem associada ao projeto" });
        }

        const deleteProjectQuery = await loadQuery('deleteProject.sql');
        await pool.query(deleteProjectQuery, [id]);

        res.status(200).json({ message: "Projeto e imagem associada excluídos com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir projeto", error: error.message });
    }
}