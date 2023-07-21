const accessKey = "ZgsrpgwQvwg0qZ2ejcWGd3Kk8yYIPM69WgfCHqv4UhE"


const form = document.querySelector("form")
const pageHeading = document.getElementById("heading")
const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const searchResults = document.getElementsByClassName("search-results")
const imageResult = document.getElementsByClassName("image-result")
const showMoreButton = document.getElementById("show-more-button")
let page = 1;
async function searchImage() {
    const inputData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    console.log(url)
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`)
    const data = await response.json();
    // console.log(data)
    if (page === 1) {
        searchResults.innerHTML ="";
    }
    
    const results = data.results;

    results.map((result) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-result");
    const imageData = document.createElement("img");
    imageData.src = result.urls.small;
    imageData.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageDiv.appendChild(imageData);
    imageDiv.appendChild(imageLink);
    searchResults.appendChild(imageDiv);
    });
    

    if(page >1) {
        showMoreButton.style.display = "block";
    }
}

function handleSubmit(event) {
    event.preventDefault();
    page = 1;
    searchImage();
}


form.addEventListener("submit", handleSubmit)