import { useContext } from "react";
import { Context } from "../contexts/auth"; // Importando o AuthContext
import "./hstyle.css"
const Home = () => {
  const vari = useContext(Context); // Usando o contexto AuthContext
  
  return (
    <div className="hls">
      <h2>aqui é nois cachorro</h2>
      <h1>aqui fica o context: {vari}</h1>
    </div>
  );
}

export default Home;
