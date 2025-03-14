import express from 'express';
import { createProject } from '../controllers/projects/createProject.js';
import { getProject } from '../controllers/projects/getProject.js';
import { getAllProjects } from '../controllers/projects/getAllProjects.js';
import { deleteProject } from '../controllers/projects/deleteProject.js';
import { updateProject } from '../controllers/projects/updateProject.js';

const router = express.Router();

router.post('/create', createProject);
router.get('/get-project/:id', getProject);
router.get('/get-all-projects', getAllProjects);
router.delete('/delete-project/:id', deleteProject);
router.put('/update-project/:id', updateProject);

export default router;