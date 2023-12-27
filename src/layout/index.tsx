import Sidebar from "components/sidebar"
import { PropsWithChildren } from "react"
import layoutStyles from "styles/layout.module.css"

const Layout = ({ children }: PropsWithChildren) => (
    <div className={layoutStyles.root}>
        <Sidebar />
        {children}
    </div>
)

export default Layout
