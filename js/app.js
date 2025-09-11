let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function(){
    //Assincrona
fetch('https://jsonplaceholder.typicode.com/posts/99')
  .then(function(response){
    // return response.json();
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro');
    }
  })
  .then(function(json){
    let post = Post.frontRaw(json);
    div = post.renderFrom(div);
  })

  .catch(function (erro) {
    console.log(erro);
    
  });
});