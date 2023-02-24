import './style.css';
import foto from './images/foto.png';


export default function About () {
    return (
        <div className='about'>
            <div className='description'>
                <h1 className='head'>About me</h1>
                <p>I’m software developer and this is my portfolio.
I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
                <div className='params'>
                    <ul className='listLeft'>
                        <li>Lorem Ipsum Description Text</li>
                        <li>Lorem Ipsum Description Text</li>
                    </ul>
                    <ul className='listRight'>
                        <li>Lorem Ipsum Description Text</li>
                        <li>Lorem Ipsum Description Text</li>
                    </ul>
                </div>
            </div>
            <div className='image'>
                <img src={foto}/>
            </div>
        </div>
    )
}