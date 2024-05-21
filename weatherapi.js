const apiKey='ee1ee1944fcc4414984201038242704';//apiid
// http://api.weatherapi.com/v1/current.json?key=ee1ee1944fcc4414984201038242704&q=London&aqi=yes apicall

const cityInput=document.getElementById("cityInput");
const searchBtn=document.getElementById("searchBtn");

const cityname=document.getElementById("city-name");
const countryName=document.getElementById("countryName");
const loctime=document.getElementById("loc-time");
const temp=document.getElementById("temp");
const sup = document.getElementById('sup');


async function getData(apikey,cityInput){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityInput}&aqi=yes`);
    return await promise.json();
}
searchBtn.addEventListener("click",async ()=>{
const input=cityInput.value;
if(!input.trim()){
    alert("Enter some value");
    return;
}
document.getElementById("outputCard").style.visibility="visible";
const result=await getData(apiKey,input);
cityname.innerText=(`${result.location.name},${result.location.region}`);
countryName.innerText=( `${result.location.country}`);
temp.innerText = `${result.current.temp_c}`;
sup.innerText = '°C';
loctime.innerText = `${result.location.localtime}`;
});


