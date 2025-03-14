import { loadQuery, pool } from "../../db/config/connectDB.js";
import { deleteImageCloudinary } from "./functions/deleteImageCloudinary.js";
import { uploadImageCloudinary } from "./functions/uploadImageCloudinary.js";
import { validateRequiredFields } from "./functions/validateRequiredFields.js";
import projectSchema from "./schemas/projectSchema.js";

export const updateProject = async (req, res) => {
    try {
        const postId = req.params.id;

        const { name, description, stack, link, img_url } = req.body;

        if (!validateRequiredFields(name, description, stack, link, img_url)) {
            return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
        }

        const validationResult = projectSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                message: 'Dados de projeto inválidos',
                errors: validationResult.error.format()
            });
        }

        const secure_url = await uploadImageCloudinary(img_url);

        const query = await loadQuery('updateProject.sql');
        const result = await pool.query(query, [postId, name, description, stack, link, secure_url]);

        res.status(201).json({ message: "Projeto atualizado com sucesso", data: result.rows });
    } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar projeto", error: error.message })
    }

}