import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SideBarContainer } from "./style"

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20} >Vitor dos Reis</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>vitordrs</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Desenvolvedor</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar