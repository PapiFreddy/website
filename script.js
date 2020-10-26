



let inteli=document.getElementsByClassName("inteligente");


let encuesta={
    inteligent:[],
    retard:[]
}
function myfunction1(){
    encuesta.retard.push(true)
}

function myfunction(){
    encuesta.inteligent.push(true);   
}
let id=setInterval(()=>{

    if(encuesta.inteligent.length>=inteli.length-1&&encuesta.retard.length<=0){
        alert("omg usted es un genio total")
        clearInterval(id)

    }else if(encuesta.retard.length>0){
        alert("usted es retardado")
        console.log(encuesta.retard.length)
        clearInterval(id)
    }

},200)




