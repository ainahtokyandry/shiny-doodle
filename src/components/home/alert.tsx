import alertStyles from "styles/home/alert.module.css"
import Icon from "../base/icon"

const Alert = () => (
    <div className={alertStyles.root}>
        <span className={alertStyles.iconWrapper}>
            <Icon name="career" />
        </span>
        <div className={alertStyles.contentWrapper}>
            <h4>Premium Account</h4>
            <p>
                You have a premium account, granting you access to all the remarkable features offered by ResumeDone.
                With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and
                cover letters in both PDF and Word formats.
            </p>
        </div>
    </div>
)

export default Alert
