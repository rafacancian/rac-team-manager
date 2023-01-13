import {AiFillCloseCircle} from 'react-icons/ai';
import './Collaborator.css'

const Collaborator = ({collaborator, backgroundColor, toDelete }) => {
    return (<div className='collaborator'>
        <AiFillCloseCircle
            size={25}
            className='delete'
            onClick={() => toDelete(collaborator.id)}
        />
        <div className='header' style={{ backgroundColor: backgroundColor }}>
            <img src={collaborator.picture} alt={collaborator.name}/>
        </div>
        <div className='collaborator-footer'>
            <h4>{collaborator.name}</h4>
            <h5>{collaborator.sector}</h5>
        </div>
    </div>)
}

export default Collaborator