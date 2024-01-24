import Produtos from './components/Produtos';
import './index.css';
import vinho from './assets/vinho.png'
import Banner from './components/Banner';
import HeaderComponent from './components/HeaderComponent';



function App() {
  return (
    <>
      <HeaderComponent/>

      <main className='p-8 flex justify-between flex-wrap'>

        <Banner/>

        <Produtos 
        titulo={"Quinta do morgado"}
        preco={"R$ 9.99"}
        descricao={"Vinho tinto suave"}
        imagem={ vinho }
        />

        <Produtos 
                titulo={"Quinta do morgado"}
                preco={"R$ 9.99"}
                descricao={"Vinho tinto suave"}
                imagem={ vinho }
                />

        <Produtos 
                titulo={"Quinta do morgado"}
                preco={"R$ 9.99"}
                descricao={"Vinho tinto suave"}
                imagem={ vinho }
                />

        <Produtos 
                titulo={"Quinta do morgado"}
                preco={"R$ 9.99"}
                descricao={"Vinho tinto suave"}
                imagem={ vinho }
                />
      </main>
    </>
  );
}

export default App;

