import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSec } from "./style";

const Sobre = () => (
<section>
  <Titulo fontSize={16}>Sobre mim</Titulo>
  <Paragrafo tipo="principal">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero laborum delectus, amet veritatis animi. Ea error quas id dolorum aut deserunt illo blanditiis maxime hic. Molestiae impedit perferendis culpa?
  </Paragrafo>
  <GithubSec>
    <img  src="https://github-readme-stats.vercel.app/api?username=vitordrs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=vitordrs&layout=compact&langs_count=7&theme=dracula"/>
  </GithubSec>
</section>
)

export default Sobre