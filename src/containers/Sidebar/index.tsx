import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SideBarContainer } from "./style"

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20} >Vitor dos Reis</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>vitordrs</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Desenvolvedor</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar