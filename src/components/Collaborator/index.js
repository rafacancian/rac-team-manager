import {AiFillCloseCircle} from 'react-icons/ai';
import './Collaborator.css'

const Collaborator = ({name, picture, sector, backgroundColor, toDelete }) => {
    return (<div className='collaborator'>
    <AiFillCloseCircle size={25} className='delete' onClick={toDelete} />
        <div className='header' style={{ backgroundColor: backgroundColor }}>
            <img src={picture} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{sector}</h5>
        </div>
    </div>)
}

export default Collaborator