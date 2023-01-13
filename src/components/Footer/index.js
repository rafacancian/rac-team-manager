import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <FaFacebookSquare size={30} style={{color: "black"}} />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                  <FaTwitterSquare size={30} style={{color: "black"}} />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                   <FaInstagramSquare size={30} style={{color: "black"}} />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <p> RAC Team Manager</p>
       </section>
       <section>
        <p>
            Developed by Rafael Cancian.
        </p>
       </section>
    </footer>)
}

export default Footer