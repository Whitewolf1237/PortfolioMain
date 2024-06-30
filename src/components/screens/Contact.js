import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import '../styles/Contact.css'
import React from 'react'

export default function Contact() {
    return (
        <div className='contactWrapper'>
            <h1 className='contactHeading'>Hello there. Feel free to drop me a text!</h1>
            <div className='contactIconWrapper'>
                <a href='https://www.linkedin.com/in/nitinraimain/'><FontAwesomeIcon className='contactIcons' icon={faLinkedin} /><p className='contactTags'>LinkedIn</p></a>
                <a href='https://github.com/Whitewolf1237'><FontAwesomeIcon className='contactIcons' icon={faGithub} /><p className='contactTags'>GitHub</p></a>
                {/* <a href='https://twitter.com/priyanagda1311'><FontAwesomeIcon className='contactIcons' icon={faTwitter} /><p className='contactTags'>Twitter</p></a> */}
                <a href='mailto:aiml21041@glbitm.ac.in'><FontAwesomeIcon className='contactIcons' icon={faEnvelopeOpenText} /><p className='contactTags'>Gmail</p></a>
            </div></div>
    )
}
