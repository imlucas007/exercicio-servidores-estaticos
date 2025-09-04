let button = document.getElementById('btnUsers');

button.addEventListener('click', function(){
    //Assincrona
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response){
    return response;
  })
  .then(function(json){
    console.log(json);
  })
    // console.log('Clicou');
});