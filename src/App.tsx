import { ThemeProvider } from 'styled-components'

import Projetos from './components/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function trocaTema() {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={darkTheme ? temaDark : temaLight}>
      <EstiloGlobal/>
      <Container>
      <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre/>
          <Projetos/>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App