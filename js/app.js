

var randoButton = document.getElementById("rando")
var title = document.getElementById('title')
var access = document.getElementById('access')
var education = document.getElementById('education')
var price = document.getElementById('price')
var participants = document.getElementById('participants')
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")
var dropdown 


function handleRando(response){
console.log(response)



title.innerText = `Name: ${response.data.activity}`
access.innerText = `Difficulty: ${response.data.accessibility}`
education.innerText = `Type: ${response.data.type}`
participants.innerText = `Participants: ${response.data.participants}`
price.innerText = `Price: ${response.data.price}`
}

function handleMulti(response){

    title.innerText = `Name: ${response.data.activity}`
    access.innerText = `Difficulty: ${response.data.accessibility}`
    education.innerText = `Type: ${response.data.type}`
    participants.innerText = `Participants: ${response.data.participants}`
    price.innerText = `Price: ${response.data.price}`
}

function onRando(){
   return axios.get('http://www.boredapi.com/api/activity/')
  .then(handleRando)
  .catch(function (error) {
    console.log(error);
  });
}

function onMulti(e){
    let num = e.path[0].id

    axios.get(`http://www.boredapi.com/api/activity?participants=${num}`)
    .then(handleMulti)
    .catch(function (error) {
        console.log(error);
      });


}

randoButton.addEventListener('click', onRando)
one.addEventListener('click', onMulti)
two.addEventListener('click', onMulti)
three.addEventListener('click', onMulti)
four.addEventListener('click', onMulti)