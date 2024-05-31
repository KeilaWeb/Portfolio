import Avatar from '../img/eu.jpeg'
import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';
import SocialNetWorks from './SocialNetWorks';

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Keila Barreto"/>
        <p className="title">Desenvolvedora</p>
        <SocialNetWorks/>
        <InformationContainer/>
        <a href="" className="btn">Download curriculo</a>
        </aside>;
}

export default Sidebar