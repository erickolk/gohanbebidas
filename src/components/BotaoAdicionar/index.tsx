// BotaoAdicionar.js
import { useCarrinho } from '../CarrinhoContext';

const BotaoAdicionar = ({ item }:any) => {
  const { dispatch }:any = useCarrinho();

  const handleAdicionarAoCarrinho = () => {
    dispatch({ type: 'ADICIONAR_ITEM', item });
  };

  return (
    <button onClick={handleAdicionarAoCarrinho}>Adicionar ao Carrinho</button>
  );
};

export default BotaoAdicionar;
