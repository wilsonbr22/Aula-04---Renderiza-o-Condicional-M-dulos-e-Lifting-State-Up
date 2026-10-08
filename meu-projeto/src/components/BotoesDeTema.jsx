function BotoesDeTema({ setTema }) {
  return (
    <div>
      <button onClick={() => setTema("claro")}>Claro</button>
      <button onClick={() => setTema("escuro")}>Escuro</button>
    </div>
  );
}

export default BotoesDeTema;