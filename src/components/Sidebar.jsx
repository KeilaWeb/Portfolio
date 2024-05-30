import Avatar from '../img/eu.jpeg'
import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Keila Barreto"/>
        <p className="title">Desenvolvedora</p>
        <p>redes sociais</p>
        <p>informações de contato</p>
        <a href="" className="btn">Download curriculo</a>
        </aside>;
}

export default Sidebar