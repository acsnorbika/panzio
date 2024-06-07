document.querySelector('button').onclick = kalkulacio

//teljes furdo ellatasnal kikapcs a tobbit
document.querySelectorAll('input[name="furdo"]').forEach((elem) => {
    elem.addEventListener('change', function () {
        if (this.value === "2000" && this.checked) {
            document.querySelectorAll('input[name="furdo"]').forEach((el) => {
                if (el.value !== "2000") el.disabled = true;
            });
        } else if (this.value === "2000" && !this.checked) {
            document.querySelectorAll('input[name="furdo"]').forEach((el) => {
                el.disabled = false;
            });
        }
    });
});

function kalkulacio() {
    var erkezes = document.querySelector('#erkezes').value;
    var tavozas = document.querySelector('#tavozas').value;

    if (new Date(erkezes) >= new Date(tavozas)) {
        alert("A távozás dátuma nem lehet korábbi vagy azonos az érkezés dátumával.");
        return;
    }

    var szobatipusElem = document.querySelector('input[name="szobatipus"]:checked');
    var szobatipus = szobatipusElem.value;
    var szobatipusSzoveg = szobatipusElem.parentNode.textContent.split(' - ')[0];

    var vendegek = document.querySelector('#vendegek').value;
    var eletkorInputs = document.querySelectorAll('#eletkor-group input');
    for (var i = 0; i < vendegek; i++) {
        if (Number(eletkorInputs[i].value) < 16) {
            alert("A pótágyak csak 16 év alatti vendégeknek vehetők igénybe.");
            return;
        }
    }

    var kajaElem = document.querySelector('input[name="kaja"]:checked');
    var kaja = kajaElem.value;
    var kajaSzoveg = kajaElem.parentNode.textContent.split(' - ')[0];

    var furdoelem = document.querySelectorAll('input[name="furdo"]:checked');
    var furdo = 0;
    var furdoSzoveg = [];
    for (var i = 0; i < furdoelem.length; i++) {
        furdo += Number(furdoelem[i].value);
        furdoSzoveg.push(furdoelem[i].parentNode.textContent.split(' - ')[0]);
    }

    var datum1 = new Date(erkezes);
    var datum2 = new Date(tavozas);
    var datumkulonbseg = Math.abs(datum2 - datum1);
    var napkulonbseg = Math(datumkulonbseg / (1000 * 60 * 60 * 24));

    var szobakoltseg = szobatipus * napkulonbseg;
    var kajakoltseg = kaja * vendegek * napkulonbseg;
    var furdokoltseg = furdo * vendegek * napkulonbseg;

    var teljesosszeg = szobakoltseg + kajakoltseg + furdokoltseg;
    var furdoSzovegList = furdoSzoveg.join(", ");

    const foglalasadat = `
    Kedves Vendégünk!
    Tájékoztatjuk a sikeres foglalásról.
    Érkezés: ${erkezes}
    Távozás: ${tavozas}
    Szoba Típusa: ${szobatipusSzoveg}
    Vendégek száma: ${vendegek} fő
    Ellátás: ${kajaSzoveg}
    Igényelt szolgáltatások: ${furdoSzovegList}
    A teljes összeg: ${teljesosszeg} Ft

    Köszönjük a megrendelését!
    `;

    alert(foglalasadat);
}
