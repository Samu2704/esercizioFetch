fetch("https://api.pexels.com/v1/search/?page=1&per_page=25&query=phone",{
    method: "GET",
    headers:{
        "authorization":"Hy8bmDfi5xFkiaPUnFSVz3JhOCBTNhCpHGiBV5Mn1OvTrLg1iVCgIuPl",
        "content-type": "application/json"
    }
}).then((response) =>{
    response.json().then((InteroElemento) =>{
//console.log(InteroElemento)
InteroElemento.photos.forEach(element => {
    //console.log(element.src.original)
    let cornice= document.querySelector("#cornice")
    cornice.innerHTML +="<div class= 'foto' style='background-image:url("+element.src.original+")'></div>"
    
});
    })
})