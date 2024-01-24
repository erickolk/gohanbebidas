import React from 'react';
import { useCarrinho } from '../CarrinhoContext'; // Ajuste o caminho conforme necessário

interface ProdutoProps {
  titulo: string;
  descricao: string;
  preco: number;
  imagem: string;
}

const Produtos: React.FC<ProdutoProps> = ({ titulo, descricao, preco, imagem }) => {
  const { dispatch } = useCarrinho();

  const adicionarAoCarrinho = () => {
    // Adiciona o item ao carrinho usando o dispatch
    dispatch({
      type: 'ADICIONAR_ITEM',
      item: { titulo, descricao, preco, imagem } as ProdutoProps,
    });
  };

  return (
    <section className="w-[300px] h-[400px] bg-red-50 rounded-lg border-red-300 shadow-lg border-2 p-2 flex flex-col items-center">
      <img src={imagem} alt={titulo} className="h-[220px]" />
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p>{descricao}</p>
      <p>{preco}</p>
      <button
        className="bg-red-600 p-2 rounded-md mt-4 w-40 text-white font-medium text-lg"
        onClick={adicionarAoCarrinho}
      >
        Comprar
      </button>
    </section>
  );
};

export default Produtos;
