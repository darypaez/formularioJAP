function over(){
    alert("Cuidado!");
}

function enviarForm(){
    alert("Mensaje enviado!");
$to = "darypaez-@hotmail.com";
$subject = "Prueba";
$message = "Hola, di enviar formulario";
$headers = "From: daryannick@gmail.com";
 
mail($to, $subject, $message, $headers);
    
}

function keypress(){
 let a = document.getElementById("nombre").value;
 document.getElementById("nombre").value = a.toUpperCase();
}