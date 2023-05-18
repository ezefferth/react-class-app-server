import express from 'express';
import { router } from './routes';
import { CreateAlunoController, DeleteAlunoController, FindAlunoController } from './controllers/AlunoCreateController';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(express.json());
app.use(router);


const createAluno = new CreateAlunoController()
const findAluno = new FindAlunoController();
const deleteAluno = new DeleteAlunoController();

router.get("/findAluno", findAluno.handle)
router.post("/createAluno", createAluno.handle)
router.delete("/deleteAluno", deleteAluno.handle )

app.listen(4003, () => console.log("server is running on PORT 4003"));










