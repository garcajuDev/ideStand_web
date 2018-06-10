$(document).ready(function(){
    var nombre = $("#nombre_contacto").val();
    var apellido = $("#apellido_contacto").val();
    var email = $("#email_contacto").val();
    var motivo = null;
    var acepta = 0;

  $("#enviarform").click(function(){
     if ($("#detalles_contacto").is(":checked")){
      motivo = $("#detalles_contacto").val();
    }
    if ($("#presupuesto_contacto").is(":checked")){
      motivo = $("#presupuesto_contacto").val();
    }
    if ($("#otras_contacto").is(":checked")){
      motivo = $("#otras_contacto").val();
    }

    if ($("#terminos").is(':checked')){
      acepta = true;
    }

    var info = {};
    info = {name: nombre, lastname: apellido, email: email, motive: motivo, accept: acepta};
      $.ajax({
          type: 'POST',
          url: 'http://localhost/idebackend/backend.php',
          dataType: 'HTML',
          data: info,
          success: function(msg){
            if (msg) $("#ajax_result").html(msg);
            else $("ajax_result").html("Error");
          }
        });
    });
  });