import Projeto from "../Projeto"
import Titulo from "../Titulo"
import { Lista } from "./style"

const Projetos = () => (
  <section>
        <Titulo fontSize={16}>Projetos</Titulo>
        <Lista>
          <li>
            <Projeto></Projeto>
          </li>
          <li>
            <Projeto></Projeto>
          </li>
          <li>
            <Projeto></Projeto>
          </li>
          <li>
            <Projeto></Projeto>
          </li>
          <li>
            <Projeto></Projeto>
          </li>
          <li>
            <Projeto></Projeto>
          </li>
          <li>
            <Projeto></Projeto>
          </li>
          <li>
            <Projeto></Projeto>
          </li>
        </Lista>
  </section>
)

export default Projetos