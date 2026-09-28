window.onload=function(){
    alert("Welcome to my website!");
    displayYear();
};
function displayYear(){
    let yearElement=document.getElementById("current year");
    if (yearElement){
        yearElement.innerHTML=new Date().getFullYear();
        
    }
}
function checkAvailability(){
    document.getElementById("stockStatus").innerHTML="Not Available";

}
