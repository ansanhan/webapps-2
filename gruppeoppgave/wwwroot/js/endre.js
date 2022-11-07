let valider = true;
$(function () {
    /*henter data fra elementet som skal endres*/
    const id = window.location.search.substring(1);
    const url = "ufo/henten?" + id;
    $.get(url, function (res) {
        /*splitter opp og reformaterer dato for å få riktig format for html element*/
        const datoSplit = res.dato.split(".");
        const datoFormatert = datoSplit[2] + "-" + datoSplit[1] + "-" + datoSplit[0];


        $("#id").val(res.id);
        $("#navn").val(res.navn);
        $("#sted").val(res.sted);
        $("#dato").val(datoFormatert);
        $("#tid").val(res.tid);
        $("#beskrivelse").val(res.beskrivelse);
    });

});

function registrer() {
    const datoSplit = $("#dato").val().split("-");
    const datoFormatert = datoSplit[2] + "." + datoSplit[1] + "." + datoSplit[0];
    const id = window.location.search.substring(4);
    valider = true;

    /*kjører alle inputvaliderings funksjoner*/
    endretNavn();
    endretSted();
    endretDato();
    endretTid();
    endretBes();

/*om valider er sant sendes json objekt med verdiene til kontroller sin endre med id hentet fra url*/
    if (valider){
        const endreRes = {
            id: id,
            navn: $("#navn").val(),
            sted: $("#sted").val(),
            dato: datoFormatert,
            tid: $("#tid").val(),
            beskrivelse: $("#beskrivelse").val()
        }
        $.post("ufo/endre", endreRes, function (OK) {
            if (OK) {
                window.location.href = 'admin.html'
            } else { $("#feil").html("Feil - Prøv igjen senere") }
        });
    }
}

/*inputvalidering delt opp i funksjoner for å kunne bruke dem i onchange på html*/
function endretNavn() {
    if ($("#navn").val() == "") {
        $("#errNavn").html("Skriv inn navn");
        $("#navn").addClass('is-invalid');
        valider = false;
    } else {
        $("#errNavn").html("");
        $("#navn").removeClass('is-invalid');
    }
}
function endretSted() {
    if ($("#sted").val() == "") {
        $("#errSted").html("Skriv inn sted");
        $("#sted").addClass('is-invalid');
        valider = false;

    } 
    else {
        $("#errSted").html("");
        $("#sted").removeClass('is-invalid');
    }
}
function endretDato() {
    if ($("#dato").val() == "") {
        $("#errDato").html("Velg dato");
        $("#dato").addClass('is-invalid');
        valider = false;
    }
    else {
        $("#errDato").html("");
        $("#dato").removeClass('is-invalid');
    }
}
function endretTid() {
    if ($("#tid").val() == "") {
        $("#errTid").html("Velg tidspunkt");
        $("#tid").addClass('is-invalid');
        valider = false;
    }
    else {
        $("#errTid").html("");
        $("#tid").removeClass('is-invalid');
    }
}
function endretBes() {
    if ($("#beskrivelse").val() == "") {
        $("#errBes").html("Skriv inn beskrivelse");
        $("#beskrivelse").addClass('is-invalid');
        valider = false;
    } 
    else {
        $("#errBes").html("");
        $("#beskrivelse").removeClass('is-invalid');
    }
}
