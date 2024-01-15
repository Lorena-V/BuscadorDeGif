import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

     const [images, setImages] = useState([]);  // estado
     const [isLoading, setIsLoading] = useState(true); 

    const getImages = async() => {  //onadd
        const newImages = await getGifs(category); //Es el que hace la petición http
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();     
    }, [])
    // console.log(category);

  return {
    images,
    isLoading
  }
}
