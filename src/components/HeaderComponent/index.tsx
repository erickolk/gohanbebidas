import { CarrinhoProvider } from '../CarrinhoContext';
import BotaoAdicionar from '../BotaoAdicionar';
import Carrinho from '../Carrinho';
import Sacola from '../Sacola';

export default function HeaderComponent(){
    return (
        <header className=''>
        <section className='bg-red-50 pr-8 pl-8 flex justify-between'>
          <div>
            <span>i</span>
            <a target="_blank" href="" className='ml-2'>Entrar</a>
          </div>
          
          <nav>
                <ul className="flex">
                    <li><a target="_blank" href="#" className="mr-4">Atendimento</a></li>
                    <li><a target="_blank" href="#" className="mr-4">Social</a></li>
                    <li><a target="_blank" href="#" className="mr-4">Social</a></li>
                    <li><a target="_blank" href="#">Criar conta</a></li>
                </ul>
          </nav>

            <CarrinhoProvider>
                <div>
                    <h1>Meu Site de Compras</h1>
                    <BotaoAdicionar item={{ id: 1, nome: 'Produto 1', preco: 10.0 }} />
                    <BotaoAdicionar item={{ id: 2, nome: 'Produto 2', preco: 20.0 }} />
                    <Carrinho />
                </div>

                <Sacola/>
            </CarrinhoProvider>

            
        </section>
        <section className='p-8 flex justify-center bg-yellow-400'>
          <h1 className="text-red-600 text-4xl font-bold">Gohan Bebidas</h1>
        </section>
      </header>
    )
}