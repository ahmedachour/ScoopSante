function champsVide(){
email=document.getElementById('email').value;

	msg="";
	    if (window.document.form.name.value==""){
		msg+="champ NOM est vide \n";
		}	
		if (!((email.indexOf("@")>=0)) || !((email.indexOf(".")>=0)))
		{
		msg+="Email invalide  \n";
		}
		if (window.document.form.mdpp.value=="")
		{
		msg+="champ password est vide \n";
		}
				if (window.document.form.date.value=="")	 

		{
		msg+="champ Date est vide \n";
		}
				return msg;

	}
function validation(){
	
	x= champsVide();
	y=Mdp();
	
if (x=="") {
 alert ("votre formulaire est rempli");
}
else alert(x+y);
    window.location.replace("elegantpress/contact.html");

	
	}	
function Mdp(){
	msg="";
	mdpp=window.document.form.mdpp.value;
	mdpc=window.document.form.mdpc.value;
	
		if  (mdpp!=mdpc){
		msg+="mot de passe non identiques \n";}
		if (mdpp.length!=8)
	msg+= "Password doit etre 8 chiffre \n";

 return msg;
	}
	