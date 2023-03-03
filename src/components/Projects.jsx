import './style.css';
import code from './images/code.png';
import project from './images/project.png';


export default function Projects () {
    return (
        <div className='wrapper'>
            <h1 className='head' id='projects'>My Projects</h1>
            <div className='about'>
                <div className='image1'>
                    <img src={code}/>
                </div>
                <div className='text'>
                    <h3>Jumystap</h3>
                    <p>First study project</p>
                    <div className='params'>
                        <ul className='listLeft'>
                            <li><a href='https://github.com/Zhakosha/nfactorial-weeklyproject-15jan-jumystap-desctop/blob/main/index.html'>github</a></li>
                            <li>HTML, CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='about'>
                
                <div className='text'>
                    <h3>To do list</h3>
                    <p>Study project</p>
                    <div className='params'>
                        <ul className='listLeft'>
                            <li><a href='https://github.com/Zhakosha/nfactorial-to-do-list'>github</a></li>
                            <li>HTML, CSS, React JS, Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className='image1'>
                    <img src={project}/>
                </div>
            </div>
        </div>
    )
}