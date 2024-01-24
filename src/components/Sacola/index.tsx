import { useCarrinho } from '../CarrinhoContext';

const Sacola: React.FC = () => {
  const { state } = useCarrinho();

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', background: '#fff', padding: '10px', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}>
      🛒 {state.itens.length}
    </div>
  );
};

export default Sacola;