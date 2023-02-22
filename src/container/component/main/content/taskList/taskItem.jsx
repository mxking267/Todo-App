import styles from "../styles.css"

export const TaskItem = (props) => {
    return (
        <div className={props.className}>
            <div className="title">{props.data.title}</div>
            <div className="action"></div>
            <div className="description">{props.data.description}</div>
            <div className="progressPercent">{props.data.progress}</div>
            <div className="progressBar">
                <div className="progress"></div>
            </div>
        </div>
    )
}