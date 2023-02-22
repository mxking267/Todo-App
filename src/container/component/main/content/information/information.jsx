import styles from "./styles.css"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Information = () => {

    return (
        <div className="information">
            <div className="select">
                <div className="textWrapper">
                <h4>SELECTED</h4>
                <h3>Design Team</h3>
                </div>

                <FontAwesomeIcon className="userSecretIcon" icon={faUserSecret} />
            </div>

        <div className="pieChartWrapper">
            <div className="pieChart">
                <span className="chartNumber">75%</span>
            </div>
        </div>

            <div className="statistical">
                <h4 className="statisHeader">Project</h4>
                <div className="infStatisRow">

                <div className="infWrapper">
                <div className="square total">
                    <span className="infTitle">Total</span>
                    <h3 className="data">144</h3>
                </div>
                </div>
                <div className="infWrapper">
                <div className="square complete">
                    <span className="infTitle">Total</span>
                    <h3 className="data">144</h3>
                </div>
                </div>
                </div>
                <div className="infStatisRow">
                <div className="infWrapper">
                <div className="square inProgress">
                    <span className="infTitle">Total</span>
                    <h3 className="data">144</h3>
                </div>
                </div>
                <div className="infWrapper">
                <div className="square waiting">
                    <span className="infTitle">Total</span>
                    <h3 className="data">144</h3>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
} 