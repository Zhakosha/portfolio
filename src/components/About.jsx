import './style.css';
import foto from './images/foto.png';


export default function About () {
    return (
        <div className='about'>
            <div className='description'>
                <h1 className='head' id='about'>About me</h1>
                <p>I've been studying programming for several months and looking for a non-paid internship opportunity in React JS</p>
                <div className='properties'>
                    <ul className='listLeft'>
                        <li>nFactorial school</li>
                        <li>HTML, CSS, Javascript, React JS</li>
                    </ul>
                    <ul className='listRight'>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
            <div className='image'>
                <img src={foto}/>
            </div>
        </div>
    )
}