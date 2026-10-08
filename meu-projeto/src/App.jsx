import Notificacao from "./components/Notificacao";
import SeletorDeTema from "./components/SeletorDeTema";

function App() {
  return (
    <div>
      <Notificacao mensagens={[]} />
      <Notificacao mensagens={["Oi"]} />
      <Notificacao mensagens={["Oi", "Tudo bem?", "Aula hoje"]} />

      <SeletorDeTema />
    </div>
  );
}

export default App;