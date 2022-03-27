//1 step: Creiamo l'azione onCLick al bottone

document.getElementById("mybutton").onclick= function(){

    //Estrapoliamo il nome con un controllo : Se non il nome non viene Inserito il Programma non prosegue e lancia un allert
    var nome = document.getElementById("nome").value;
    if(nome == 0){
        alert("Sei pregato di inserire tutti i dati correttamente");
    }else{
        console.log(nome);
        document.getElementById("nome_passeggero").innerHTML=(nome);
    }



}


