// write js code here corresponding to favourites.html

var fvrtArr=JSON.parse(localStorage.getItem("favourites"));

displayData(fvrtArr)

function displayData(data){

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
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            deleteFun(ele,index)
        })


        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    })
}
    function  deleteFun(ele,index){
    fvrtArr.splice(index,1)

    localStorage.setItem("favourites",JSON.stringify(fvrtArr));
    window.location.reload();
}