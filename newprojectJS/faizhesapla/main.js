function KrediHesapla(){

    var cekilecekTutar, vadeSayisi;
    var aylikTaksit, odenecekToplamTutar;


    cekilecekTutar = document.getElementById("txtKrediTutari").value;

    var liste = document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    if(vadeSayisi==12){
        odenecekToplamTutar = cekilecekTutar*1.1;
    }
    else if(vadeSayisi == 24){
        odenecekToplamTutar = cekilecekTutar* 1.2;
    }
    else if (vadeSayisi == 36) {
        odenecekToplamTutar = cekilecekTutar * 2.14;
    }
    else if (vadeSayisi == 48) {
        odenecekToplamTutar = cekilecekTutar * 1.4;
    }
    aylikTaksit = odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML = "Geri Ödeme Toplamı :" + odenecekToplamTutar+"<br>"+ "Aylık Taksit Tutarınız :" + aylikTaksit.toFixed(2);

}


















