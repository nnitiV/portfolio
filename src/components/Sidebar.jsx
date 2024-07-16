import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/Eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="/Curriculo_VitorAugustoEliasCunha.pdf" className="btn" download="Curriculo_VitorAugustoEliasCunha.pdf">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
