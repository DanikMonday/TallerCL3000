
import './App';
import Bienvenida from './componentes/Bienvenida';
import Descubrir from './componentes/Descubrir';


export function Home() {
  return (
    <div className="Home">
      <Bienvenida
        titulo='¿QUIÉNES SOMOS?'
        parrafo='El taller de Lucerito, desde el 2001 es una empresa dedicada al corte
        y confección de prendas de vestir para dotaciones industriales, jardines
         (agrícolas), cultivos de flores y frutos, salones de belleza, restaurantes,
        dotación hospitalaria y elementos complementarios textiles.        
        En este lugar podrás encontrar las prendas que necesitas para tus colaboradores, 
        así como implementos de seguridad de uso industrial o doméstico. '/>
      <Descubrir
        titulo='DESCUBRIR'
        />
    </div>
  );
}

export default Home;
