import avatar from "assets/avatar.png"
import sidebarStyle from "styles/sidebar.module.css"
import Icon from "./base/icon"

const starItemList = [
    "Software Engineer",
    "Computer hardware engineer",
    "Network Engineer",
    "Technical Support",
    "Network administrator",
    "Management",
    "Data analysis",
    "Computer technician",
]

const searchHistoryList = [
    "Past search 1",
    "Past search 2",
    "Computers and information...",
    "Database Administrator",
    "Computer security",
    "Computer Systems Analyst",
]

const boardList = ["Board 1", "Board 2", "Board 3"]

const lockedBoardList = ["Board agent 1", "Board agent 1", "Board agent 1"]

const Sidebar = () => (
    <div className={sidebarStyle.root}>
        <div>
            <div className={sidebarStyle.logo}>
                <Icon name="logo" />
            </div>
            <nav className={sidebarStyle.nav}>
                <div className={sidebarStyle.navActionItem}>
                    <Icon name="template" />
                    <span>My templates</span>
                </div>
                <div className={sidebarStyle.navActionItem}>
                    <Icon name="search" />
                    <span>Search</span>
                </div>
                <ul>
                    {starItemList.map((item) => (
                        <li className={sidebarStyle.starItem} key={item}>
                            <i>⭐️</i>
                            <span>{item}</span>
                        </li>
                    ))}
                    {searchHistoryList.map((item) => (
                        <li className={sidebarStyle.searchHistoryItem} key={item}>
                            <Icon name="clock" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className={sidebarStyle.navActionItem}>
                    <Icon name="search" />
                    <span className="flex-1">My boards</span>
                    <Icon name="add" />
                </div>
                <ul>
                    {boardList.map((item, key) => (
                        <li key={key} className={sidebarStyle.boardItem}>
                            <i>🗂️</i> <span>{item}</span>
                        </li>
                    ))}
                    {lockedBoardList.map((item, key) => (
                        <li key={key} className={sidebarStyle.boardItem}>
                            <i>🔒</i> <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className={sidebarStyle.footer}>
            <div className={sidebarStyle.avatar}>
                <img src={avatar} alt="Carla" />
            </div>
            <span>Carla</span>
            <Icon name="setting" />
        </div>
    </div>
)

export default Sidebar
