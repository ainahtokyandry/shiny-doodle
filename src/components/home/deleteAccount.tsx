import deleteAccountStyles from "styles/home/deleteAccount.module.css"

const DeleteAccount = () => (
    <div className={deleteAccountStyles.root}>
        <div className={deleteAccountStyles.descriptionWrapper}>
            <h5>Delete account</h5>
            <p>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
        </div>

        <span className={deleteAccountStyles.action}>Yes, Delete my account</span>
    </div>
)

export default DeleteAccount
