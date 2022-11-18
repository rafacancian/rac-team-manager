import './Button.css'

const Button = (props) => {
    return (<button className='form-button'>
        {props.children}
    </button>)
}

export default Button