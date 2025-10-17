import {Titulo as Title} from './style'

export type Props = {
  children: string;
  fontSize?: number;
}

const Titulo = (props: Props) => <Title fontSize={props.fontSize}>{props.children}</Title>

export default Titulo