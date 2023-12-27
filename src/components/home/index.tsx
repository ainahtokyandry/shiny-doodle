import Alert from "components/home/alert"
import homeStyles from "styles/home/index.module.css"
import Actions from "./action"
import DeleteAccount from "./deleteAccount"
import Footer from "./footer"
import Form from "./form"

const Home = () => (
    <div className={homeStyles.root}>
        <Alert />
        <Form />
        <Actions />
        <DeleteAccount />
        <Footer />
    </div>
)

export default Home
