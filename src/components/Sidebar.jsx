import Avatar from '../img/eu.jpeg'
import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';
import SocialNetWorks from './SocialNetWorks';

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Keila Barreto"/>
        <p className="title">Desenvolvedora Front-End e Designer</p>
        <SocialNetWorks/>
        <InformationContainer/>
        <a href="https://drive.google.com/file/d/1KLNA2xMpYqzggIiu65hWIUq9qzFwBN-q/view" className="btn" target='blank'>Download curriculo</a>
        </aside>;
}

export default Sidebar