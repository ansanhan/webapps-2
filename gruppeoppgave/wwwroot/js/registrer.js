let valider = true;
function registrer() {
    /*splitter opp og reformaterer dato for å få riktig format fra F.eks 2020-09-22 til 22.09.2020.*/
    const datoSplit = $("#dato").val().split("-");
    const datoFormatert = datoSplit[2] + "." + datoSplit[1] + "." + datoSplit[0];
    valider = true; /*i tilfelle valider tidligere ble satt til false men egentlig nå er true*/

    /*kjører alle inputvaliderings funksjoner*/
    endretNavn();
    endretSted();
    endretDato();
    endretTid();
    endretBes();

    /*om valider er sant sendes json objekt med verdiene til kontroller sin lagre*/
    if (valider){
        const nyRegistrering = {
            navn: $("#navn").val(),
            sted: $("#sted").val(),
            dato: datoFormatert,
            tid: $("#tid").val(),
            beskrivelse: $("#beskrivelse").val()
        }
        $.post("ufo/lagre", nyRegistrering, function (OK) {
            if (OK) {
                window.location = document.referrer; /*Laster inn forrige side på nytt sånn at registrer både kan brukes på admin og forside, og tar deg tilbake til riktig side etterpå.*/
            } else $("#feil").html("Lagring feilet")
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