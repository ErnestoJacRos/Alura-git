const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');




function encriptar(cadenaEncriptada){
    let matrizCodigo =[ ['e','enter'],
                    ['i', 'imes'],
                    ['a', 'ai'  ],
                    ['o','ober' ],
                    ['u', 'ufa' ] ];

    cadenaEncriptada = cadenaEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }                
    return cadenaEncriptada;
}
function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado;
    textArea.value = ''
    mensaje.style.backgroundImage = 'none';
}


console.log('logo')

function encriptar(cadenaEncriptada){
    let matrizCodigo =[ ['e','enter'],
                    ['i', 'imes'],
                    ['a', 'ai'  ],
                    ['o','ober' ],
                    ['u', 'ufa' ] ];

    cadenaEncriptada = cadenaEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }                
    return cadenaEncriptada;
}
function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado;
    textArea.value = ''
    mensaje.style.backgroundImage = 'none';
}
