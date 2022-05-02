// write js code here corresponding to matches.html

var matchArr=JSON.parse(localStorage.getItem("schedule"));

// console.log(matchArr)
var fvrtArr=JSON.parse(localStorage.getItem("favourites")) || [];
displayData(matchArr)

function displayData(data){
    
    document.querySelector("tbody").innerHTML="";
        data.forEach(function(ele){

        var tr=document.createElement("tr")

        var td1=document.createElement("td");
        td1.innerText=ele.number;

        var td2=document.createElement("td");
        td2.innerText=ele.selectA

        var td3=document.createElement("td");
        td3.innerText=ele.selectB

        var td4=document.createElement("td");
        td4.innerText=ele.date

        var td5=document.createElement("td");
        td5.innerText=ele.venue

        var td6=document.createElement("td");
        td6.innerText="Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            favouritefunction(ele)
        });
    
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    })
}
    function favouritefunction(ele){
        fvrtArr.push(ele)
        // console.log(fvrtArr)
        localStorage.setItem("favourites",JSON.stringify(fvrtArr));
    }
   
    function handleFilter(){
        var select=document.querySelector("#filterVenue").value;
        var filterList=matchArr.filter(function(ele){
            return ele.venue==select
        });
        displayData(filterList);
    }