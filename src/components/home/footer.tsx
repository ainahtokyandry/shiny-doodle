import Link from "components/base/link"
import footerStyles from "styles/home/footer.module.css"

const Footer = () => (
    <footer className={footerStyles.root}>
        <p>
            <Link>Get in touch with our support team</Link> if you have any question or want to leave some feedback.
            <br />
            We’ll be happy to hear from you.
        </p>
        <hr />
        <ul className={footerStyles.links}>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Contact Us</li>
        </ul>
    </footer>
)

export default Footer
