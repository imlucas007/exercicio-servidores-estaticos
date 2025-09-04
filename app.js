let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function(){
    //Assincrona
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    div.textContent = `Title: ${data[0].title}, Body: ${data[0].body}`;
    // let listaOrdenada = '<ol>';
    
    // for (usuario in data) {
    //     '<li>' + `Title ${usuario.title}` +'</li>';
    // }
  })
});