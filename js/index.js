

    
    
    window.addEventListener('load', function() {
     

           fetch("https://petition.parliament.uk/petitions/747234.json")
           .then(response => response.json() )
           .then(obj => {document.getElementById("signature-count").innerHTML
             = obj.data.attributes.signature_count;  })
             .catch(error => console.log(error));

}


); 
 
