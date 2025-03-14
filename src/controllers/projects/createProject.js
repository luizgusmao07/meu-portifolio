import { loadQuery, pool } from "../../db/config/connectDB.js";
import { uploadImageCloudinary } from "./functions/uploadImageCloudinary.js";
import projectSchema from "./schemas/projectSchema.js";


export const createProject = async (req, res) => {
    try {

        const validationResult = projectSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                message: 'Dados de projeto inválidos',
                errors: validationResult.error.format()
            });
        }

        const { name, description, stack, link, img_url } = req.body;

        console.log(req.body);

        if (!name || !description || !stack || !link || !img_url) {
            return res.status(400).json({ message: 'Preencha todos os campos obrigatórios' });
        }
            
        const secure_url = await uploadImageCloudinary(img_url);

        const query = await loadQuery('createProject.sql');
        const result = await pool.query(query, [name, description, stack, link, secure_url]);

        res.status(201).json({ message: "Projeto criado", data: result.rows });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar projeto', error: error.message });
    }
};

