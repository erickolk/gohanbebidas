// CarrinhoContext.tsx
import { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';

interface Item {
  id: number;
  nome: string;
  preco: number;
}

interface CarrinhoState {
  itens: Item[];
}

interface CarrinhoContextProps {
  state: CarrinhoState;
  dispatch: Dispatch<CarrinhoAction>;
}

type CarrinhoAction = { type: 'ADICIONAR_ITEM'; item: Item } | { type: 'REMOVER_ITEM'; id: number };

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(undefined);

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoReducer = (state: CarrinhoState, action: CarrinhoAction): CarrinhoState => {
  switch (action.type) {
    case 'ADICIONAR_ITEM':
      return { ...state, itens: [...state.itens, action.item] };

    case 'REMOVER_ITEM':
      return {
        ...state,
        itens: state.itens.filter((item) => item.id !== action.id),
      };

    // Adicione outros casos conforme necessário

    default:
      return state;
  }
};

export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(carrinhoReducer, initialState);

  return (
    <CarrinhoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = (): CarrinhoContextProps => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser utilizado dentro de um CarrinhoProvider');
  }
  return context;
};
