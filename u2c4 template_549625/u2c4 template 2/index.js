// write js code here corresponding to index.html
// You should add submit event on the form
 var form=document.querySelector("#masaiForm");
 form.addEventListener("submit",matchsubmit)

 var matchArr=JSON.parse(localStorage.getItem("schedule")) || [];
 function matchsubmit(){
     event.preventDefault();

     //formid.inputid.value
     var matchobj={
         number:form.matchNum.value,
         selectA:form.teamA.value,
         selectB:form.teamB.value,
         date:form.date.value,
         venue:form.venue.value
     };
     matchArr.push(matchobj)
    //  console.log(matchArr);
    localStorage.setItem("schedule",JSON.stringify(matchArr));
    window.location.href="matches.html";
 }