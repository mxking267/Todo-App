import React from "react"
import styles from "./styles.css"
import { Sidebar } from "./component/sidebar/sidebar"
import { Main } from "./component/main/main"

export const Container = () => {
    return (
        <div className="Container">
            <Sidebar />
            <Main />
        </div>
    )
}