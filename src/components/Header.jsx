import './style.css';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




export default function Header () {
    return (
        <div className='wrapper'>
            <div className='header'>
                <div className='navbar'>
                    <p>Zhanar Shaimerdenova</p>
                </div>
                <div className='list'>
                    <ul className='items' >
                        
                            <li><a href ='#about'>About</a></li>
                            <li><a href ='#experiance'>Experience</a></li>
                            <li><a href ='#projects'>Projects</a></li>
                            <li><a href ='#footer'>Contacts</a></li>   
                    </ul>                  
                </div>
            </div>
            <div className='link'>
                <h1 className='printed-text'>Hi, I’m Zhanar,
                    </h1>
                <h1 className='printed-text'>
                    I build things for the web.</h1>
                    <p>I’m software developer and this is my portfolio.</p>
                <a href='https://docs.google.com/document/d/12FQ9q3dAg7fUSf74AptEPWfn4dm1M1DDYazd7Tgo6SI/edit?usp=sharing'>Check out my CV</a>
            </div>
        </div>   
    )
}
