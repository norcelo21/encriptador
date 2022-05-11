function messageHandler(text){    
    let isEmpty=text.length<=0;
    
    if (!(isEmpty)) {
        Swal.fire({        
            type: 'success',
            title: 'El proceso fue realizado con éxito',
            showConfirmButton: false,
            timer: 1500
        });  
       
                    
    }
    else{
        Swal.fire({     
            
            title: 'Ingrese texto',
            text: 'Ingresa el texto que desees encriptar o desencriptar',
            imageUrl: 'static/img/Muñeco.svg',
            imageWidth: 300,
            imageHeight: 150,
            imageAlt: 'empty image',
            padding:'2em',
            confirmButtonColor:'var( --dark-blue-300',
            buttonsStyling: false,
          }) 
    }
};

function CopyHandler(text){    
    let isEmpty=text.length<=0;
    
    if (!(isEmpty)) {
        Swal.fire({        
            type: 'success',
            title: 'El texto fue copiado correctamente',
            showConfirmButton: false,
            timer: 1500
        });  
       
                    
    }
    else{
        Swal.fire({     
            type: 'error',
            title: 'Ingrese texto',
            padding:'2em',
            showConfirmButton: true,
            confirmButtonColor:'var( --dark-blue-300',
            buttonsStyling: false,
          }) 
    }
};
