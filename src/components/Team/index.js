import Collaborator from '../Collaborator'
import './Team.css'
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    const css = { backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(props.color, '0.2') }

    return (
        (props.collaborators.length > 0) ? <section className='team' style={css}>
            <input value={props.color} onChange={event => props.changeColor(event.target.value, props.id)}
               type='color' className='input-color' />
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator =>
                    <Collaborator backgroundColor={props.color} key={collaborator.id} name={collaborator.name}
                    sector={collaborator.sector} picture={collaborator.picture} toDelete={props.toDelete}/>
               )}
            </div>
        </section>
        : ''
    )
}


export default Team