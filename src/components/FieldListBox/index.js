import './FieldListBox.css'

const FieldListBox = (props) => {
    return (
       <div className='field-listbox'>
                <label>{props.label}</label>
                <select
                onChange={event => props.valueChanged(event.target.value)}
                required={props.required}
                    value={props.value}>
                    <option value=""></option>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </div>
    )
}

export default FieldListBox