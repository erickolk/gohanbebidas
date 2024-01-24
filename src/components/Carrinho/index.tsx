// Carrinho.js
import { useCarrinho } from '../CarrinhoContext';

const Carrinho = () => {
  const { state }:any = useCarrinho();

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {state.itens.map((item:any) => (
          <li key={item.id}>
            {item.nome} - R${item.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;
