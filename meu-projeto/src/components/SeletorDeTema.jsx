import { useState } from "react";
import BotoesDeTema from "./BotoesDeTema";
import Previa from "./Previa";

function SeletorDeTema() {
  const [tema, setTema] = useState("claro");

  return (
    <div>
      <BotoesDeTema tema={tema} setTema={setTema} />
      <Previa tema={tema} />
    </div>
  );
}

export default SeletorDeTema;