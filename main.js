//window.onload

document.addEventListener("DOMContentLoaded", () => {
    const days = document.getElementById("days");
    const gps = document.getElementById("gps");
    const roadside = document.getElementById("roadside");
    const tag = document.getElementById("tag");
    const under25 = document.getElementById("under25"); //YES
    const estimate = document.getElementById("estimate");
    const output = document.getElementById("output");

    estimate.addEventListener("click",()=>{
        const results = getRateData(
            Number(days.value),
            gps.checked,
            roadside.checked,
            tag.checked,
            under25.checked,
        )
        output.innerHTML = getTextResults(results);
    });//end estimate click

});//end DOM Content Loaded