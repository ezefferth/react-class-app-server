import express from 'express';
import { router } from './routes';
import { CreateAlunoController, FindAlunoController } from './controllers/AlunoCreateController';

const app = express();
app.use(express.json());
app.use(router);

const createAluno = new CreateAlunoController()
const findAluno = new FindAlunoController();

router.post("/createAluno", createAluno.handle)
router.get("/findAluno", findAluno.handle)


app.listen(4003, () => console.log("server is running on PORT 4003"));

