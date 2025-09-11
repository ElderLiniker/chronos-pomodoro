

import { Container } from "./components/container"
import { Logo } from "./components/logo"


import "./styles/theme.css"
import "./styles/global.css"
import { Menu } from "./components/Menu"
import { CountDown } from "./components/countDown"

 export function App() {
return( 
<>
<Container>
      <Logo/>
    </Container>

<Container>
        <Menu/>
    </Container>

    <Container>
        <CountDown/>
    </Container>

</>
)
}


