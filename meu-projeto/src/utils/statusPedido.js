export function rotuloDoStatus(status) {
  const rotulos = {
    entregue: "Entregue",
    atrasado: "Atrasado",
    em_transito: "Em trânsito",
  };

  return rotulos[status] ?? "Status desconhecido";
}