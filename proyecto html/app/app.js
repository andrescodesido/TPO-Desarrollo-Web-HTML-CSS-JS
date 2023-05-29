const contenedorAnimes = document.querySelector("#contenedor-anime")
  
fetch('https://api.jikan.moe/v4/top/anime')
  .then(response => response.json())

  .then(data => 
   
    {

      const $pesonajes = document.getElementById("pesonajes");
      const dataArray = data.data;
    console.log (dataArray)
      for (let i = 0; i < dataArray.length; i++) {
        const div = document.createElement("div");
        div.classList.add("anime");
        div.innerHTML = `
            
            <div class="anime-detalles">
            <img class="anime-imagen" src="${dataArray[i].images.jpg.image_url}" </img>
            <h3>${dataArray[i].title} </h3>
            <a href="${dataArray[i].trailer.embed_url}">Ver trailer</a>

 
              
            </div>
        `;
        console.log(dataArray[i].title)
        
        contenedorAnimes.append(div);
   
    }
  })
  .catch(error => {
    console.log(error);
  });



