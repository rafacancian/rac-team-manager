import { useState } from 'react'
import './FieldForm.css'
import FieldText from '../FieldText'
import FieldListBox from '../FieldListBox'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

     const [name, setName] = useState('')
     const [sector, setSector] = useState('')
     const [picture, setPicture] = useState('')
     const [teamName, setTeamName] = useState('')

    const createCollaborator = (event) => {
       event.preventDefault()
       const id = uuidv4();
       console.log("submit form: " ,name, sector, picture, teamName)
       props.saveNewCollaborator({id, name, sector, picture, teamName})

       setName('')
       setSector('')
       setPicture('')
       setTeamName('')
    }

    return (
        <section className="field-form">
               <form onSubmit={createCollaborator}>
                 <h2>Insert a new Collaborator</h2>
                   <FieldText value={name} valueChanged={value => setName(value)} required={true} label="Name" placeholder="Digit your name"/>
                   <FieldText value={sector} valueChanged={value => setSector(value)} required={true} label="Sector" placeholder="Digit your Sector"/>
                   <FieldText value={picture} valueChanged={value => setPicture(value)}  required={true} label="Picture" placeholder="Digit the url picture"/>
                   <FieldListBox value={teamName} valueChanged={value => setTeamName(value)} required={true} label="Team" itens={props.teams}/>
                   <Button>Create</Button>
               </form>
         </section>
    )
}

export default Form