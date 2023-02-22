import { TaskItem } from "./taskItem"
import styles from "../styles.css"
export const TaskList = (props) => {
    console.log(props.data)
    return(
        <div className="taskList">
            <h4>{props.colName}</h4>
                {props.data.map((e) => {
                    return(
                        <TaskItem data={e}className="item" />
                    )
                })}
        </div>
    )
}