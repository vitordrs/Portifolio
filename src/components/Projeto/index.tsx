import { Card, Link } from "./style";
import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefa com VueJS</Paragrafo>
    <Link>Visualizar</Link>
  </Card>
)

export default Projeto