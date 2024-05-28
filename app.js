document.querySelector('button').onclick = kalkulacio
function kalkulacio(){
    const erkezes=document.querySelector('#erkezes').value
    const tavozas=document.querySelector('#tavozas').value
    const szobatipus=document.querySelector('input[name="szobatipus"]:checked').name
    const vendegek = document.querySelector('#vendegek').value
    const kaja = document.querySelector('input[name="kaja"]:checked').value

    const furdoelem = document.querySelectorAll('input[name="furdo"]:checked')



    const foglalasadat=
        `Kedves Vendégünk!
        Tájékoztatjuk a sikeres foglalásról.
        Érkezés: ${erkezes}
        Távozás: ${tavozas}
        Szoba Típusa: ${szobatipus} Ft/éj
        Vendégek száma: ${vendegek} fő
        
        `

    alert(foglalasadat)
}
