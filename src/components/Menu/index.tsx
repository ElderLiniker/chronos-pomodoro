

import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react"
import styles from "./styles.module.css"
import { useState } from "react"

type AvailableThemes = "dark" | "light"

export function Menu(){

    const [theme, setTheme] =useState<AvailableThemes>("dark")
    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){

event.preventDefault()

        console.log("clicado", Date.now())

        setTheme(prevTheme=>{
            const nextTheme =prevTheme === "dark" ?"light": "dark"
            
            return nextTheme
        })

       // document.documentElement.setAttribute("data-theme", theme)

    }

    

    
    return  <nav className={styles.menu} >
        <h1>{theme}</h1>
        
        <a className={styles.menuLink} href="#" aria-label="Ir para a Home" title="Ir para a Home">
            <HouseIcon/>
            </a>

            <a className={styles.menuLink} href="#" aria-label="Ver histórico" title="Ver histórico">
            <HistoryIcon/>
            </a>

            <a className={styles.menuLink} href="#" aria-label="Configurações" title="Configurações">
            <SettingsIcon />
            </a>

            <a className={styles.menuLink} href="#" aria-label="Trocar tema" title="Trocar tema" onClick={handleThemeChange} >
            <SunIcon />
            </a>
        
        
        </nav>
}