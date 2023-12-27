import inputStyles from "styles/input.module.css"

interface InputProps {
    label: string
    value?: string
}

const Input = ({ label, value }: InputProps) => (
    <div className={inputStyles.root}>
        <label>{label}</label>
        <input defaultValue={value} />
    </div>
)

export default Input
