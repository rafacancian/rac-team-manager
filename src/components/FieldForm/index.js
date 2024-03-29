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

     const [newTeamName, setNewTeamName] = useState('')
     const [newTeamColor, setNewTeamColor] = useState('')

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

               <form onSubmit={(event) => {
                    event.preventDefault()
                    props.saveNewTeam({name: newTeamName, color: newTeamColor})
                }}>
                   <h3>Insert a new Team</h3>
                      <FieldText type="text" value={newTeamName} valueChanged={value => setNewTeamName(value)} required label="Name" placeholder="Digit the name"/>
                      <FieldText type="color" value={newTeamColor} valueChanged={value => setNewTeamColor(value)} required label="Color" placeholder="Digit the color"/>
                      <Button>Create</Button>
               </form>

               <form onSubmit={createCollaborator}>
                   <h3>Insert a new Collaborator</h3>
                      <FieldText type="text" value={name} valueChanged={value => setName(value)} required={true} label="Name" placeholder="Digit your name"/>
                      <FieldText type="text" value={sector} valueChanged={value => setSector(value)} required={true} label="Sector" placeholder="Digit your Sector"/>
                      <FieldText type="text" value={picture} valueChanged={value => setPicture(value)}  required={true} label="Picture" placeholder="Digit the url picture"/>
                      <FieldListBox value={teamName} valueChanged={value => setTeamName(value)} required={true} label="Team" itens={props.teams}/>
                      <Button>Create</Button>
               </form>
         </section>
    )
}

export default Form