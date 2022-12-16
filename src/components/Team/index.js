import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondColor }

    return (
        (props.collaborators.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator backgroundColor={props.firstColor} key={collaborator.name} name={collaborator.name} sector={collaborator.sector} picture={collaborator.picture}/> )}
            </div>
        </section>
        : ''
    )
}


export default Team