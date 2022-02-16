const searchBox = document.querySelector(".search-area");
const searchBtn = document.querySelector(".icon-search");
const cancelBtn = document.querySelector(".icon-cancel");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".data-search");

searchBtn.onclick = ()=>{
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if(searchInput.value != ""){
        var values = searchInput.value;
        searchData.classList.remove("active");
        searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
    }else{
        searchData.textContent = "";
    }
}
cancelBtn.onclick = ()=>{
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
}