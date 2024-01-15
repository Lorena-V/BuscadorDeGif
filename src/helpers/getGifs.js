export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lXU1xlQuDO2n4aIQKtRT8Nk73QMT3vyG&q=${category}&limit=10`;
    const resp = await fetch(url);
    const{data} = await resp.json();

    const gifs = data.map(img => ({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }));

    return gifs;
}