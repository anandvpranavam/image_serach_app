const accessKey = "ZgsrpgwQvwg0qZ2ejcWGd3Kk8yYIPM69WgfCHqv4UhE";



const searchResults = document.querySelector(".search-results")
const showMoreButton = document.getElementById("#showMoreButton")
let page = 1;
async function searchImages(){
    const searchInput = document.querySelector("#search-input")
    const inputData = searchInput.value
    const linkURL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=&${accessKey}`;
    console.log(linkURL)
    const response = await fetch(linkURL);
    const data = await response.json();
    console.log(data)
}


function handleSubmit(event){
    event.preventDefault();
    console.log("submitted")
    searchImages();
}
const formElement = document.querySelector("#myForm")
formElement.addEventListener("submit", handleSubmit)