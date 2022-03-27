//1 step: Creiamo l'azione onCLick al bottone

document.getElementById("mybutton").onclick= function(){

    //Estrapoliamo il nome con un controllo : Se non il nome non viene Inserito il Programma non prosegue e lancia un allert
    let nome = document.getElementById("nome").value;
    if(nome == 0 ){
        alert("Errore nella compilazione");
    }else{
        console.log(nome);
        document.getElementById("nome_passeggero").innerHTML=(nome);
    }

    //estrapoliamo i km da percorrere
    let chilometri_da_percorrere = document.getElementById("chilometri").value;
    if(chilometri_da_percorrere == 0){
        alert("Inserisci i dati correttamente");
    }



    //sezione sconto minorenne
    let km = 0.21;
    let eta = document.getElementById("eta").value;
    if(eta > 0  && eta < 18){
        console.log("Sconto minorenne");
        let costo_minorenne = km - ((km * 20)/100);
        costo_minorenne = costo_minorenne.toFixed(2);
        console.log("il costo di ogni km per i minorenne è di " + costo_minorenne);
        document.getElementById("sconto").innerHTML=("Sconto Minorenne");
        costo_biglietto_minore = costo_minorenne * chilometri_da_percorrere;
        costo_biglietto_minore=costo_biglietto_minore.toFixed(2);
        document.getElementById("costo").innerHTML=(costo_biglietto_minore + " €");
        
    }else if (eta > 65){
        console.log("sconto anziano");
        document.getElementById("sconto").innerHTML=("Sconto anziani");
        let costo_anziano = km - ((km * 40)/100);
        costo_anziano = costo_anziano.toFixed(2);
        console.log("Il costo di ogni Km per gli over 65 è di " + costo_anziano);
        costo_biglietto_anziano = costo_anziano * chilometri_da_percorrere;
        costo_biglietto_anziano=costo_biglietto_anziano.toFixed(2);
        document.getElementById("costo").innerHTML=(costo_biglietto_anziano);
    }else{
        console.log("Nessuno sconto attivo");
        document.getElementById("sconto").innerHTML=("Nessuno sconto attivo");
        costo_no_sconto = km * chilometri_da_percorrere;
        costo_no_sconto = costo_no_sconto.toFixed(2);
        console.log(costo_no_sconto);
        document.getElementById("costo").innerHTML=(costo_no_sconto + " €");
    }


}


