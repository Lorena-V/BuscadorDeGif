import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

//  COMPONENTE PADRE

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( NewCategory ) => {
        
        if ( categories.includes(NewCategory) ) return;
        //categories.push('ranmma')  //push muta el estado, no recomienda usar
        setCategories([NewCategory, ...categories]);
        //  valorant
    }

  return (
    <>  
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories= { setCategories } 
            onNewCategory= { (value) => onAddCategory(value) } //on: categoría está emitiendo algo, evento
        />
        
        {
            categories.map((category) => (
                    <GifGrid
                        key={category} 
                        category={category} />
            ) )
        }

    </>
    
  )
}
