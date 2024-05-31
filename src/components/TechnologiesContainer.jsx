import { 
  DiHtml5, DiCss3, DiJsBadge, DiMysql, DiReact, DiPhotoshop, DiWordpress } from "react-icons/di";
  import { LiaVuejs, LiaSass, LiaFigma } from "react-icons/lia";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "react", name: "React.js", icon: <DiReact />, description: "Frameworks JavaScript para construção de interfaces dinâmicas."  },
    { id: "vue", name: "Vue.js", icon: <LiaVuejs />, description: "Frameworks JavaScript para construção de interfaces dinâmicas." },
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Linguagens de marcação para conteúdos de páginas web." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Linguagens essenciais para criação e estilização de páginas web.." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação para interatividade em sites."},
    { id: "sass", name: "Sass", icon: <LiaSass />, description: "Extensão CSS com recursos avançados de estilização." },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "LSistema de gerenciamento de banco de dados relacional." },
    { id: "wd", name: "Wordpress", icon: <DiWordpress />, description: "Plataforma popular de gerenciamento de conteúdo para websites." },
    { id: "ps", name: "Photoshop", icon: <DiPhotoshop />, description: "Software líder em edição de imagens e design gráfico." },
    { id: "figma", name: "Figma", icon: <LiaFigma />, description: "Plataforma colaborativa de design de UI/UX em nuvem" },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;