import './FieldForm.css'
import FieldText from '../FieldText'
import FieldListBox from '../FieldListBox'
import Button from '../Button'

const Form = (props) => {

    const createTeamMember = (event) => {
        event.preventDefault()
        console.log(event.target.value)
    }

    return (
        <section className="field-form">
               <form onSubmit={createTeamMember}>
                 <h2>Insert a new team member</h2>
                   <FieldText required={true} label="Name" placeholder="Digit your name"/>
                   <FieldText required={true} label="Function" placeholder="Digit your function"/>
                   <FieldText required={true} label="Image" placeholder="Digit the url image"/>
                   <FieldListBox required={true} label="Team" itens={props.teams}/>
                   <Button>Create</Button>
               </form>
         </section>
    )
}

export default Form