let url = "http://universities.hipolabs.com/search?country=";

let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", async () => {
    let state = input.value;
    input.value = "";
    let country="India";
    let clglists=await getclgs(country);
    show(clglists,state);
})

async function getclgs(country) {
    try {
        let clglists = await axios.get(url+country);
        console.log(clglists);
        return clglists.data;
    } catch(e){
        console.log("error",e);
    }
}

function show(allclgs,state){
    let list = document.querySelector("#list");
    list.innerText="";
    for (cl of allclgs) {
        let obj=Object.entries(cl);
        console.log(obj);

        let li = document.createElement("li");
        if(obj[3][1]==state){
            li.innerText = cl.name;
            list.appendChild(li);
        }
    }
}