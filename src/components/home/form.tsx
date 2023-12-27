import profilePic from "assets/profile.png"
import Input from "components/base/input"
import Link from "components/base/link"
import formStyles from "styles/home/form.module.css"

const Form = () => (
    <form className={formStyles.root}>
        <h1>Personal Information</h1>
        <div className={formStyles.contentWrapper}>
            <div className={formStyles.wrapper}>
                <div className={formStyles.grid}>
                    <Input label={"First Name"} value="Petter" />
                    <Input label={"Last Name"} value="Cetera" />
                    <Input label={"City"} value="London" />
                    <Input label={"Postal Code"} value="E2 4XF" />
                </div>
                <Input label="Address" value="123 Example" />
                <div className={formStyles.grid}>
                    <Input label={"Email"} value="petter@gmail.com" />
                    <Input label={"Phone"} value="+442223334444" />
                    <Input label={"Password"} value="Password" />
                </div>
            </div>
            <div className={formStyles.profile}>
                <img src={profilePic} alt="" />
            </div>
        </div>
        <span className={formStyles.action}>
            Use this email to log in to your <Link>resumedone.io</Link> account and receive notifications.
        </span>
        <button>Save</button>
    </form>
)

export default Form
