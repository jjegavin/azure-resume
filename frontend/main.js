window.addEventListener('DOMContentLoaded', (event) =>{
    getVisistCOunt();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(reponse =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
    console.log(error);
    });
    return count;
}