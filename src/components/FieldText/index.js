import './FieldText.css'

const FieldText = (props) => {

     const updateValue = (event) => {
        props.valueChanged(event.target.value)
    }

    return (
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={updateValue} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText