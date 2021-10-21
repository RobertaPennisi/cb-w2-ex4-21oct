const cart = [];



function carrello(){
    
    let input = prompt('Cosa metti nel carrello?');

    if(input===null || input==="" || parseInt(input)){
        alert("Non hai aggiunto alcun prodotto");
    } 
    if(cart.includes(input) == true) {
        alert("hai già aggiunto questo prodotto:" + " " + input)
    }
    
    else if( input!=='') {
        alert("Ben fatto! Hai aggiunto:" + " " + input)
        cart.push(input)
        console.log(cart)
        
        return input
    }
   
    
    
}

