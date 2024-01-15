import { GifItem } from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

//  COMPONENTE PARA MOSTRAR LAS CATEGORÍAS

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category); 
    
    return (
        <>
            <h3>{category}</h3>
            { 
                isLoading && ( <h2>Cargando...</h2> ) 
            }
            
            <div className="card-grid" >                {/* {} Expresion de JS */}
                {
                    images.map(( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image}  //Esparce todas las propiedades del image
                    />
                )
                    
                )}
                
            </div>
        </>
  )
}
