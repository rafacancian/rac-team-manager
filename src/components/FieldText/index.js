import './FieldText.css'

const FieldText = (props) => {

     const updateValue = (event) => {
        props.valueChanged(event.target.value)
    }

    return (
        <div className={`field-${props.type}`}>
            <label>
                {props.label}
            </label>
            <input type={props.type} value={props.value} onChange={updateValue} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText