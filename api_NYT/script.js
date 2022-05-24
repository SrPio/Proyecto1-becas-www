//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

//ECOGCnm7XTBSJXpU1vel4Qxv7iAFMQ5E llave de la api



let url ="https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ECOGCnm7XTBSJXpU1vel4Qxv7iAFMQ5E";



 
fetch(url).then(response => response.json()).then(data => {


// eliminacion de la noticia vacia
/*console.log(data.results[3].multimedia[0].url + "hola")
for (let index = 0; index < data.results.length; index++) {
    console.log(data.results[index].title)
    
}*/
    
for (let index = 0; index <5; index++) {
    if(data.results[index].title ==""){
        data.results.splice(index,1)
    }
}

        document.getElementById("item1a").href= data.results[0].url
        document.getElementById("item1p").innerText=data.results[0].abstract
        document.getElementById("item1t").innerHTML=data.results[0].title
        document.getElementById("item1").style.backgroundImage = 'url(" ' + data.results[0].multimedia[0].url +' ")';

        document.getElementById("item2a").href=data.results[1].url;
        document.getElementById("item2p").innerText=data.results[1].abstract
        document.getElementById("item2t").innerHTML=data.results[1].title
        document.getElementById("item2").style.backgroundImage = 'url(" ' + data.results[1].multimedia[0].url +' ")';

        document.getElementById("item3a").href=data.results[2].url;
        document.getElementById("item3p").innerText=data.results[2].abstract
        document.getElementById("item3t").innerHTML=data.results[2].title
        document.getElementById("item3").style.backgroundImage = 'url(" ' + data.results[2].multimedia[0].url +' ")';

        document.getElementById("item4a").href=data.results[3].url;
        document.getElementById("item4p").innerText=data.results[3].abstract
        document.getElementById("item4t").innerHTML=data.results[3].title
        document.getElementById("item4").style.backgroundImage = 'url(" ' + data.results[3].multimedia[0].url +' ")';

        document.getElementById("item5a").href=data.results[4].url;
        document.getElementById("item5p").innerText=data.results[4].abstract
        document.getElementById("item5t").innerHTML=data.results[4].title
        document.getElementById("item5").style.backgroundImage = 'url(" ' + data.results[4].multimedia[0].url +' ")';
        
     
})
