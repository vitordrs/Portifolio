import styled from "styled-components";
import { P } from "../../components/Paragrafo/style";

export const Descricao = styled(P)`
  margin-top:24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button `
  border-radius:12px;
  padding:8px;
  color:#eee;
  font-size10px;
  font-weight:bold;
  background-color:#282a35;
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  top:40px;
  left:0;
`