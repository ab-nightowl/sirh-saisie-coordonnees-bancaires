function listCollab() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/sgp/api/collaborateurs",
    success: function(data) {
      $('#tbody').empty();
      data.forEach(function(collab) {
        $('#tbody').append("<tr>");
        $('#tbody').append("<td>" + collab.matricule + "</td>");
        $('#tbody').append("<td>" + collab.nom + "</td>");
        $('#tbody').append("<td>" + collab.prenom + "</td>");
        $('#tbody').append("</tr>");
        
      });
    },
    error: function(jqXHR) {
      $('#table').empty().append("<tr><td> " + jqXHR.responseText + "</td></tr>");
    }
  });
}

$(document).ready(function() {
  listCollab();
});
