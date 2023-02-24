import './style.css';


export default function Header () {
    return (
        <div className='header'>
            <div className='navbar'>
                <p>Your Name</p>
            </div>
            <div className='list'>
                <ul className='items' >
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
    )
}
