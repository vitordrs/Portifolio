import styled from 'styled-components';
import { Theme } from '../../Themes/dark';

export const Card = styled.div `
  border: 1px solid ${(props) => (props.theme as Theme).corDaBorda};
  padding: 16px;
`

export const Link = styled.a`
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-size:14px;
  background-color: ${(props) => (props.theme as Theme).corDeFundoBotao};
  text-decoration:none;
  padding: 8px;
  display: inline-block;
  margin-top:24px;
  `