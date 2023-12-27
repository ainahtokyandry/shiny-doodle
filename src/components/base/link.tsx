import { PropsWithChildren } from "react"
import linkStyles from "styles/link.module.css"

const Link = ({ children }: PropsWithChildren) => <a className={linkStyles.root}>{children}</a>

export default Link
