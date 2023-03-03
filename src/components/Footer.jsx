import './style.css';
import linkedin from './images/linkedin.png';
import whatsapp from './images/whatsapp.png';

export default function Footer () {
    return (
        <div className='wrapper'>
            <div>
                <div className='title'>
                    <h1 className='head' id='footer'>Say, Hello</h1>
                        <p>I have a lot of passion to explore and learn new things and looking forward for opportunities.</p>
                    <div className='socialMedia' >
                        <a href="https://www.linkedin.com/in/shaimerdenova/"><img src={linkedin}/></a>
                        <a href="https://wa.me/77018706474"><img src={whatsapp}/></a>
                    </div>
                    
                </div>
                <div className='signature'>
                    <span>Made with ❤️ at nFactorial in 2022.</span>
                    <span>Credits: photos from Unsplash.com, icons from Icons8.</span>
                </div>
            </div>
           
        </div>
    
    )
}
