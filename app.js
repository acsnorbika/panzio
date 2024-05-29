function kalkulacio(){
    var erkezes=document.querySelector('#erkezes').value
    var tavozas=document.querySelector('#tavozas').value

    var szobatipusElem=document.querySelector('input[name="szobatipus"]:checked')
    var szobatipus = szobatipusElem.value
    var szobatipusSzoveg = szobatipusElem.parentNode.textContent.split(' - ')[0]
   
    var vendegek = document.querySelector('#vendegek').value
    
    var kajaElem = document.querySelector('input[name="kaja"]:checked').value
    var kaja = kajaElem.value
    var kajaSzoveg = kajaElem.parentNode.textContent.split(' - ')[0]


    var foglalasadat=
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
