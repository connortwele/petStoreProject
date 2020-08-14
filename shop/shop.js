var shop =[
    {
        title: "Puppy One",
        id:"puppyOne",
        pet: "Dog",
        category: "Pet",
        image: "./assets/puppyOne.png",
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat!"
    },
    {
        title: "Puppy Two",
        id:"puppyTwo",
        pet: "Dog",
        category: "Pet",
        image: "./assets/puppyTwo.png",
        price: 249.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, incidunt."
    },
    {
        title: "Puppy Three",
        id:"puppyThree",
        pet: "Dog",
        category: "Pet",
        image:"./assets/puppyThree.png",
        price: 319.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, incidunt."
    },
    {
        title:"Cat One",
        id: "catOne",
        pet:"Cat",
        category:"Pet",
        image:"./assets/catOne.jpg",
        price:289.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat!"
    },
    {
        title:"Cat Two",
        id:"catTwo",
        pet:"Cat",
        category:"Pet",
        image:"./assets/catTwo.jpg",
        price: 199.99,
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, optio?",
    },
    {
        title:"Bird One",
        id: "birdOne",
        pet:"Other",
        category:"Pet",
        image:"./assets/birdOne.jpg",
        price:89.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veritatis.",
    },
    {
        title:"Bird Two",
        id: "birdTwo",
        pet:"Other",
        category:"Pet",
        image:"./assets/birdTwo.jpg",
        price: 69.99,
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quas!",
    },
    {
        title:"Hamster",
        id: "hamster",
        pet:"Other",
        category:"Pet",
        image:"./assets/hamster.jpeg",
        price: 39.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illo",
    },
    {
        title:"Bone",
        id:"bone",
        pet:"Dog",
        category:"etc",
        image:"./assets/bone.jpg",
        price: 8.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, possimus.",
    },
    {
        title:"Cat Feather",
        id: "catFeather",
        pet:"Cat",
        category:"etc",
        image:"./assets/catFeatherToy.jpg",
        price: 3.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempore!",
    },
    {
        title:"Dry Cat Food",
        id:"dryCatFood",
        pet:"Cat",
        category:"etc",
        image:"./assets/catFoodDry.jpg",
        price: 16.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos.",
    },
    {
        title:"Wet Cat Food",
        id: "wetCatFood",
        pet:"Cat",
        category:"etc",
        image:"./assets/catFoodWet.jpg",
        price: 1.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eos.",
    },
    {
        title:"Kitty Litter",
        id: "kittyLitter",
        pet:"Cat",
        category:"etc",
        image:"./assets/catLitter.jpeg",
        price: 29.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, deserunt?",
    },
    {
        title:"Cat Castle",
        id: "catCastle",
        pet:"Cat",
        category:"etc",
        image:"./assets/catPlayground.jpg",
        price:64.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos.",
    },
    {
        title:"Scratching Post",
        id: "scratchingPost",
        pet:"Cat",
        category:"etc",
        image:"./assets/catScratcher.jpg",
        price: 25.99,
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, facilis!",
    },
    {
        title:"Dog Food",
        id: "dogFood",
        pet:"Dog",
        category:"etc",
        image:"./assets/dogFood.jpeg",
        price: 24.99,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, placeat.",
    },
    {
        title:"Hamster Bedding",
        id: "hamsterBedding",
        pet:"Other",
        category:"etc",
        image:"./assets/hamsterBedding.jpg",
        price: 8.95,
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, natus.",
    },
    {
        title:"Hamster Food",
        id: "hamsterFood",
        pet:"Other",
        category:"etc",
        image:"./assets/hamsterFood.jpg",
        price: 7.99,
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, similique.",
    },
    {
        title:"Exercise Wheel",
        id: "excerciseWheel",
        pet:"Other",
        category:"etc",
        image:"./assets/hamsterWheel.jpg",
        price: 14.99,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates.",
    },
    {
        title:"Laser Pointer",
        id: "laserPointer",
        pet:"Cat",
        category:"etc",
        image:"./assets/laserPointer.jpg",
        price: 11.95,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quae.",
    },
    {
        title:"Litter Box",
        id: "litterBox",
        pet:"Cat",
        category:"etc",
        image:"./assets/litterBox.jpeg",
        price: 23.99,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat.",
    },
    {
        title:"Tennis Ball",
        id: "tennisBall",
        pet:"Dog",
        category:"etc",
        image:"./assets/tennisBall.jpg",
        price: .99,
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates.",
    }
]

// default layout below

var emptyCart=[1]
console.log(emptyCart)

var postHTML = " "





for (var i=0; i < shop.length; i++){
    var heading = '<div class="product ' + shop[i].id + '"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}



document.getElementById('market').innerHTML = postHTML



// return to default ('none' selection)

function none(){
var postHTML = " "

for (var i=0; i < shop.length; i++){

    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"  id="'+ [i] +'"> add to cart</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
    

}




document.getElementById('market').innerHTML = postHTML





}

// sort low to high below
function lowToHigh(){

var postHTML = " "


shop.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});


for (var i=0; i < shop.length; i++){
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}

document.getElementById('market').innerHTML = postHTML

}
// sort high to low below
function highToLow(){

    var postHTML = " "
    
    shop.sort(function(a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });
    
    
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description
        postHTML = postHTML + concatThis
    }
    
    document.getElementById('market').innerHTML = postHTML
    
    }

// dog filter
function filterDog(){

    var postHTML = " "
    
    let dogs = 'Dog'

    let results = shop.filter(function(arg){
        return arg.pet == dogs
    })


    
    
    for (var i=0; i < results.length; i++){
        var heading = '<div class="product"><span><h5>' + results[i].title + '</h5>'
        var image = '<img src="' + results[i].image + '"/'
        var price = '<p> $' + results[i].price + '</p></span>'
        var description = '<div class="hoverProduct"><p>'+ results[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description
        postHTML = postHTML + concatThis
    }
    
    document.getElementById('market').innerHTML = postHTML
    
    }

// cat filter

function filterCat(){

    var postHTML = " "
    
    let cats = 'Cat'

    let results = shop.filter(function(arg){
        return arg.pet == cats
    })


    
    
    for (var i=0; i < results.length; i++){
        var heading = '<div class="product"><span><h5>' + results[i].title + '</h5>'
        var image = '<img src="' + results[i].image + '"/'
        var price = '<p> $' + results[i].price + '</p></span>'
        var description = '<div class="hoverProduct"><p>'+ results[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description
        postHTML = postHTML + concatThis
    }
    
    document.getElementById('market').innerHTML = postHTML
    
    }

// Other Filter (birds, hamster)

function filterOther(){

    var postHTML = " "
    
    let others = 'Other'

    let results = shop.filter(function(arg){
        return arg.pet == others
    })

    
    
    for (var i=0; i < results.length; i++){
        var heading = '<div class="product"><span><h5>' + results[i].title + '</h5>'
        var image = '<img src="' + results[i].image + '"/'
        var price = '<p> $' + results[i].price + '</p></span>'
        var description = '<div class="hoverProduct"><p>'+ results[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description
        postHTML = postHTML + concatThis
    }
    
    document.getElementById('market').innerHTML = postHTML
    
    }

// filter all pets

function filterPets(){

    var postHTML = " "
    
    let allPets = 'Pet'

    let results = shop.filter(function(arg){
        return arg.category == allPets
    })

    
    
    for (var i=0; i < results.length; i++){
        var heading = '<div class="product"><span><h5>' + results[i].title + '</h5>'
        var image = '<img src="' + results[i].image + '"/'
        var price = '<p> $' + results[i].price + '</p></span>'
        var description = '<div class="hoverProduct"><p>'+ results[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description
        postHTML = postHTML + concatThis
    }
    
    document.getElementById('market').innerHTML = postHTML
    
    }

// product filter

function filterProducts(){

    var postHTML = " "
    
    let allProducts = 'etc'

    let results = shop.filter(function(arg){
        return arg.category == allProducts
    })

    
    
    
    for (var i=0; i < results.length; i++){
        var heading = '<div class="product"><span><h5>' + results[i].title + '</h5>'
        var image = '<img src="' + results[i].image + '"/'
        var price = '<p> $' + results[i].price + '</p></span>'
        var description = '<div class="hoverProduct"><p>'+ results[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description
        postHTML = postHTML + concatThis
    }
    
    document.getElementById('market').innerHTML = postHTML
    
    }

//add to cart function











    



    






// shop.sort(function(a, b) {
//     return parseFloat(a.price) - parseFloat(b.price);
// });











//<div class="product pet dog" id="puppyOne">
//<span>
  //<h5>Puppy One</h5>
  //<img src="./assets/puppyOne.png"/>
  //<p>$299.99</p>
//</span>
{/* <div class="hoverProduct">
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat!</p>
  <button type="button" class="btn btn-warning">add to cart</button>
</div>
</div> */}