import { Content } from "./content/content"
import { Header } from "./header/header"
import styles from "./styles.css"

export const Main = () => 
{
    return (
        <div className="main">
            <Header />
            <Content />
        </div>
    )
}