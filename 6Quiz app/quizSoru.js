
function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap;
}

 Soru.prototype.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("Olimpiyatlar kaç yılda bir yapılıyor ? ", {a:"Samsun Spor", b:"Real Madrid",c:"Dinamo Kiev",d:"Barcelona"}, "a"),
    new Soru("Ortalama bir golf topunun kaç çukuru vardır ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    new Soru("Çin, Pekin Olimpiyatları'nda kaç madalya kazandı ? ", {a:"Xiaomi", b:"Apple",c:"Oppo",d:"Vestel"}, "b"),
    // new Soru("Ortalama bir golf topunun kaç çukuru vardır ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("653 maçla Premier Lig'de en çok forma giyen oyuncu kimdir ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("İlk Premier Lig şampiyonluğunu hangi takım kazandı ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("En çok Şampiyonlar Ligi şampiyonluğu kazanan kulüp hangisidir ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("Şampiyonlar Ligi'ni sadece bir kez Romanya'dan bir takım kazandı. Hangi  ?", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("Dünyaca ünlü Formula 1 pilotunun adı nedir 7 kez Dünya şampiyonu olmuş ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("Dünya tarihinde en fazla gol atan futbolcu kimdir ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("Messi tüm profesyonel kariyerini neredeyse Barcelona'da geçirdi, peki ilk takımının adı neydi ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("En çok Dünya Kupası kazanan ülke hangisidir ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("Premier Lig tarihinin en hızlı golü 7.69 saniye ile geldi. Kim attı ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("1930'da ilk Dünya Kupası'nı hangi ülke kazandı ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),
    // new Soru("1996 NBA draftlarında Charlotte Hornets tarafından 13. sıradan seçilen 26 ocakta geçirdiği bir kaza sonucu hayatını kaybeden ünlü basketbol oyuncusu kimdir ? ", {a:"56", b:"57",c:"54",d:"41"}, "c"),

//     new Soru("Hangisi  Amerikan Markasıdır ? ", {a:"Hyundai", b:"Intel",c:"Amazon"}, "c"),
//     new Soru("Batuhan Kimdir ? ", {a:"Hyundai", b:"Intel",c:"Amazon"}, "c"),
//     new Soru("Mert Kimdir ? ", {a:"Hyundai", b:"Intel",c:"Amazon"}, "c"),
//     new Soru("Ayşe Kimdir ? ", {a:"Hyundai", b:"Intel",c:"Amazon"}, "c"),
// 
];


