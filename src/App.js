import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default () => {
  return (
    <div id='app'>
      <h1>Fundamentos React</h1>
      <Fragmento />
      <ComParametro 
        titulo='Situação do Aluno' 
        aluno='Milena Caroline'
        nota={9.7} />
      <Primeiro></Primeiro>
    </div>
  );
}