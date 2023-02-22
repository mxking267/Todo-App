import styles from "./styles.css"
import { faSliders } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TaskItem } from "./taskList/taskItem"
import { TaskList } from "./taskList/taskList"
import { Information } from "./information/information"
import { Data } from "../../../../assets/data/data"

export const Content = () => {
    return(
        <div className="content">
            <div className="activity">
                <header>
                    <h2>Project</h2>
                    <div className="action">
                        <FontAwesomeIcon className="slideIcon" icon ={faSliders} />
                        <button>Create Project</button>
                    </div>
                </header>
                <div className="todoList">
                    <TaskList colName="Started" data={Data.filter(e => e.status == "started")}/>
                    <TaskList colName="On Going" data={Data.filter(e => e.status == "on going")}/>
                    <TaskList colName="Completed" data={Data.filter(e => e.status == "completed")}/>
                </div>
            </div>
                <Information />
        </div>
    )
}
