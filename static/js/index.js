document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

        document.getElementById("text-in").value = "";
        
        }
    };
        
        function textResult(text){
            let result = document.getElementById('text-result');
            result.innerHTML=(text);
            }            
            
            
            function encrypt(){
                let defMssg = document.getElementById('content-def');
                let finalMssg = document.getElementById('content-result');
                
            if (document.getElementById("text-in").value !== "") {
                let textEn = document.getElementById("text-in").value;
                let textCod= textEn.replace(/[e]/g,'enter').replace(/[i]/g,'imes').replace(/[o]/g,'ober').replace(/[a]/g,'ai').replace(/[u]/g,'ufat');
                defMssg.style.display = "none";
                finalMssg.style.display = 'flex';
                textResult(textCod)
            }
            else{
                defMssg.style.display = "flex";
                finalMssg.style.display = 'none';
            }
            };
            
            document.querySelector("#btt-Enc").addEventListener("click", function(event) {
                let textEn = document.getElementById("text-in").value;
                
                event.preventDefault();
                messageHandler(textEn);
                encrypt();       
                         
            }, false);
            
            
            
            
            function decrypt(){
                let defMssg = document.getElementById('content-def');
                let finalMssg = document.getElementById('content-result');
            
            
            if (document.getElementById("text-in").value !== "") {
                let textDes = document.getElementById("text-in").value;
                let textDesCod= textDes.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
                defMssg.style.display = "none";
                finalMssg.style.display = 'flex';
                textResult(textDesCod);
            }
            else{
                defMssg.style.display = "inline-flex";
                finalMssg.style.display = 'none';
            }
            };
            
            document.querySelector("#btt-Des").addEventListener("click", function(event) {
                let textEn = document.getElementById("text-in").value;
                event.preventDefault();
                messageHandler(textEn);
                decrypt();
            }, false);
            
            
            
                
            
            function clipboard(){
                    
                let copyText = document.getElementById("text-result");
            
                copyText.select();
                navigator.clipboard.writeText(copyText.value);
                
              }
                    
            document.querySelector("#btt-copy").addEventListener("click", function(event) {
                let copyText = document.getElementById("text-result").value;
                        event.preventDefault();
                        CopyHandler(copyText)
                        clipboard();
            }, false);
            
    