function search(){
    location.href = "search.html?item=" + document.getElementById("search").value
}
document.getElementById("search").addEventListener('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        search()
    }
});
const watchID = navigator.geolocation.watchPosition((position) => {
    console.log(position.coords.latitude + " " + position.coords.longitude);
});