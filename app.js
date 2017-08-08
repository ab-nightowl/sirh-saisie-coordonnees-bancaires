function listCollab() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/sgp/api/collaborateurs",
    success: function(data) {
      $('#tbody').empty();
      data.forEach(function(collab) {
        var line = "<tr>";
        line += "<td>" + collab.matricule + "</td>";
        line += "<td>" + collab.nom + "</td>";
        line += "<td>" + collab.prenom + "</td></tr>";
        $('#tbody').append(line);
      });
    },
    error: function(jqXHR) {
      $('#table').empty().append("<tr><td>" + jqXHR.responseText + "</td></tr>");
    }
  });
}

$(document).ready(function() {
  listCollab();
});
