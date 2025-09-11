let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function(){
    //Assincrona
fetch('https://jsonplaceholder.typicode.com/posts/99')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    let post = Post.frontRaw(json);
    div = post.renderFrom(div);
    
    // div.innerText = json.body;
    // div.innerText = JSON.stringify(json, null, 0);
  })
});