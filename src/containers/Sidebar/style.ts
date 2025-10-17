import styled from "styled-components";
import { P } from "../../components/Paragrafo/style";
import { Theme } from "../../Themes/dark";

export const Descricao = styled(P)`
  margin-top:24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button `
  border-radius:12px;
  padding:8px;
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-size10px;
  font-weight:bold;
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  top:40px;
  left:0;

  @media (max-width: 768px){
    margin-bottom:40px;
    text-align: center;
  }
`