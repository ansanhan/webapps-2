/**henter json med alle databaseobjekter og sender det til VisTabell() funksjon*/
$(function () {
    $.get("Ufo/hentAlle", function (resultater) {
        VisTabell(resultater);
    });
});

/*formaterer hentet json objekt i en bootstrap tabell og henter hvert individuelle objekt i en for loop*/
function VisTabell(resultater) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Navn</th><th>Sted</th><th>Dato</th><th>Tid</th><th>Beskrivelse</th><th>Administrer</th><th></th>" +
        "</tr>";
    for (let resultat of resultater) {
        ut += "<tr>" +
            "<td>" + resultat.navn + "</td>" +
            "<td>" + resultat.sted + "</td>" +
            "<td>" + resultat.dato + "</td>" +
            "<td>" + resultat.tid + "</td>" +
            "<td>" + resultat.beskrivelse + "</td>" +
            "<td><a class='knapp-endre' href='endre.html?id=" + resultat.id + "'>Endre</a></td> " +
            "<td><a class='knapp-slett' onclick='slettRes(" + resultat.id + ")'>Slett</a></td> " +
            "</tr>";
    }
    ut += "</table>";
    $("#tabell").html(ut);
}

/*kaller på kontroller sin slett funksjon og bruker id hentet fra formatering i VisTabell()*/
function slettRes(id) {
    $.get("Ufo/Slett?id=" + id, function (OK) {
        if (OK) {
            window.location.href = 'admin.html';
        }
        else {
            $("#feil").html("Feil i databasen - prøv igjen senere");
        }

    });
};
