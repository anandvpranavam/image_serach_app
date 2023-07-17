const accessKey = "ZgsrpgwQvwg0qZ2ejcWGd3Kk8yYIPM69WgfCHqv4UhE";
const searchResults = document.querySelector(".search-results")
const showMoreButton = document.getElementById("#showMoreButton")
let inputData = ""
let page = 1;
async function searchImages() {
    const searchInput = document.querySelector("#search-input")
    inputData = searchInput.value
    const linkURL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    console.log(linkURL)
    const response = await fetch(linkURL);
    const data = await response.json();
    if (page === 1) {
        searchResults.innerHTML = "";
    }
    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description
        imageWrapper.appendChild.image
        imageWrapper.appendChild.imageLink
        searchResults.appendChild(imageWrapper)
    })

    if (page > 1) {
        showMoreButton.style.display = "block";
    }
}


function handleSubmit(event) {
    event.preventDefault();
    page = 1;
    searchImages();
}
const formElement = document.querySelector("#myForm")
formElement.addEventListener("submit", handleSubmit)