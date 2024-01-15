import {useState} from 'react';

export const AddCategory = ( { onNewCategory } ) => { //prop desestructurada para obtener lo que recibimos de la prop
    
    const [inputValue, setInputValue] = useState('');   //  ESTADO DEL INPUT

    const onImputChange = ({target}) => {   //  Dentro del target del evento está el value
        setInputValue(target.value);        // Para hacer el cambio en el imputvalue
    }

    const onSubmit = (event) => {   // evento onSubmit: permite ejecutar acciones cuando el usuario de clic en un botón de tipo submit. 
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return; //  .trim(): Quita los espacios iniciales, finales y repetidos del texto.
        
        //setCategories(categories => [inputValue, ...categories]) // modifica la categoría, adisional a la categoria existente.
        setInputValue(''); //   Con esto se limpia el Imput
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit } > 
        {/* (event) => onSubmit(event) */}
            <input
                type="text"
                placeholder="Buscar gift" 
                value={inputValue}
                onChange={onImputChange}    // Change: cambiar onchange: function pred de react
            />
        </form>
  )
}
