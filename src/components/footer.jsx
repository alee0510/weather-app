import React from 'react'
import '../styles/footer.scss'

import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'

const Footer = props => (
    <div className="footer">
        <ul>
            <li>
                <div><TwitterIcon id="icon"/><a href="#">Twitter</a></div>
            </li>
            <li>
                <div><InstagramIcon id="icon"/><a href="#">Instagram</a></div>
            </li>
            <li>
                <div><FacebookIcon id="icon"/><a href="#">Facebook</a></div>
            </li>
            <li>
                <div><GitHubIcon id="icon"/><a href="#">GitHub</a></div>
            </li>
        </ul>
    </div>
)

export default Footer