import { useState } from 'react'
import './FieldForm.css'
import FieldText from '../FieldText'
import FieldListBox from '../FieldListBox'
import Button from '../Button'

const Form = (props) => {

     const [name, setName] = useState('')
     const [sector, setSector] = useState('')
     const [picture, setPicture] = useState('')
     const [teamName, setTeamName] = useState('')

    const createTeamMember = (event) => {
       event.preventDefault()
       console.log("submit form: " ,name, sector, picture, teamName)

       setName('')
       setSector('')
       setPicture('')
       setTeamName('')
    }

    return (
        <section className="field-form">
               <form onSubmit={createTeamMember}>
                 <h2>Insert a new team member</h2>
                   <FieldText value={name} valueChanged={name => setName(name)} required={true} label="Name" placeholder="Digit your name"/>
                   <FieldText value={sector} valueChanged={sector => setSector(sector)} required={true} label="Sector" placeholder="Digit your Sector"/>
                   <FieldText value={picture} valueChanged={picture => setPicture(picture)}  required={true} label="Picture" placeholder="Digit the url picture"/>
                   <FieldListBox value={teamName} valueChanged={teamName => setTeamName(teamName)} required={true} label="Team" itens={props.teams}/>
                   <Button>Create</Button>
               </form>
         </section>
    )
}

export default Form