import './FieldListBox.css'

const FieldListBox = (props) => {
    return (
       <div className='field-listbox'>
                <label>{props.label}</label>
                <select required={props.required}
                    value={props.value} onChange={event => props.valueChanged(event.target.value)}>
                    <option value=""></option>
                    {props.itens.map(item => {
                        return <option key={item.name}>{item.name}</option>
                    })}
                </select>
            </div>
    )
}

export default FieldListBox