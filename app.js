document.querySelector('button').onclick=kalkulacio

function kalkulacio(){
    var erkezes=document.querySelector('#erkezes').value
    var tavozas=document.querySelector('#tavozas').value

    var szobatipusElem=document.querySelector('input[name="szobatipus"]:checked')
    var szobatipus = szobatipusElem.value
    var szobatipusSzoveg = szobatipusElem.parentNode.textContent.split(' - ')[0]
   
    var vendegek = document.querySelector('#vendegek').value
    
    var kajaElem = document.querySelector('input[name="kaja"]:checked')
    var kaja = kajaElem.value
    var kajaSzoveg = kajaElem.parentNode.textContent.split(' - ')[0]

    var furdoelem = document.querySelectorAll('input[name="furdo"]:checked')
    var furdo = 0
    var furdoSzoveg= []
    for (var i = 0; i < furdoelem.length; i++) {
        furdo += Number(furdoelem[i].value)
        furdoSzoveg.push(furdoelem[i].parentNode.textContent.split(' - ')[0])
    }

    var datum1=new Date(erkezes)
    var datum2=new Date(tavozas)
    var datumkulonbseg = Math.abs(datum2-datum1)
    var napkulonbseg= Math.ceil(datumkulonbseg/(1000*60*60*24))

    var szobakoltseg = szobatipus*napkulonbseg
    var kajakoltseg = kaja *vendegek*napkulonbseg
    var furdokoltseg = furdo *vendegek*napkulonbseg

    var teljesosszeg = szobakoltseg + kajakoltseg + furdokoltseg
    var furdoelem=furdoSzoveg.join(", ")
    const foglalasadat=
        `Kedves Vendégünk!
        Tájékoztatjuk a sikeres foglalásról.
        Érkezés: ${erkezes}
        Távozás: ${tavozas}
        Szoba Típusa: ${szobatipusSzoveg}
        Vendégek száma: ${vendegek} fő
        Ellátás: ${kajaSzoveg}
        Igényelt szolgáltatások: ${furdoSzoveg}
        A teljes összeg: ${teljesosszeg} Ft

        Köszönjük a megrendelését!
        `

    alert(foglalasadat)
}
