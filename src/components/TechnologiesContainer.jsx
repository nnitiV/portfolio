import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiJava,
  DiSass 
} from "react-icons/di";


import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> , description: "Linguagem de marcação padrão usada para criar e estruturar conteúdo na web."},
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Linguagem de estilo utilizada para definir a aparência e o layout das páginas web." },
  { id: "sass", name: "SASS", icon: <DiSass  />, description: "é uma linguagem de folhas de estilo que estende CSS com características como variáveis, mixins, funções e aninhamento, ajudando a escrever estilos de forma mais eficiente e organizada.as web." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação que permite criar conteúdo dinâmico e interativo em websites." },
  { id: "react", name: "React", icon: <DiReact />, description: "É uma biblioteca JavaScript para construir interfaces de usuário, especialmente para aplicações de página única." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "É um ambiente de execução para JavaScript no lado do servidor, permitindo construir aplicações escaláveis." },
  { id: "java", name: "Java", icon: <DiJava />, description: "É uma linguagem de programação orientada a objetos amplamente utilizada para desenvolvimento de aplicações robustas e seguras." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "É um sistema de gerenciamento de banco de dados relacional open-source usado para armazenar e gerenciar dados." },
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
