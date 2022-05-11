document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

        document.getElementById("text-in").value = "";
	}
};

const textarea = document.getElementById('text-in');
const expression = {
	textIn: /^[a-z]+$/m,
};

const formValidate = (e) => {
	if (e.target.name="textIn"){
			fieldValidate(expression.textIn, e.target);
	    }
};

const fieldValidate =(expression, input) => {	
    let warningText= document.getElementById('warning'); 
	let warningImg=document.getElementById('warning-icon');
	let bttEn=document.getElementById('btt-Enc');
	let bttDes=document.getElementById('btt-Des');
	
	if((expression.test(input.value)) || (input.value == "")){
		warningText.style.color="var(--gray-400)";
		warningImg.style.fill="var(--gray-400)"	;
		bttEn.disabled=false;
		bttDes.disabled=false;

	}
	
	else {
     warningText.style.color= "red";
	 warningImg.style.fill="red"	
	 bttEn.disabled=true;
		bttDes.disabled=true;
		
		 
	}
};

textarea.addEventListener('keyup', formValidate);
textarea.addEventListener('blur', formValidate);