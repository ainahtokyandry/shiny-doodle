import Icon from "components/base/icon"
import Link from "components/base/link"
import actionStyle from "styles/home/action.module.css"

const Actions = () => (
    <div className={actionStyle.root}>
        <Icon name="checkbox" />
        <label>
            Show my profile to serious employers on <Link>hirethesbest.io</Link> for free
        </label>
    </div>
)

export default Actions
