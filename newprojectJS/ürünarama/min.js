const search = ()=>{
    const arama = document.getElementById("search-item").value.toUpperCase();

    const genel_kiyafet = document.getElementById("product-list");

    const kiyafet = document.querySelectorAll(".product");

    const kiyafet_isim = genel_kiyafet.getElementsByTagName("h2");

    for(var i=0; i<kiyafet_isim.length; i++){
        let match = kiyafet[i].getElementsByTagName("h2")[0];

         if(match){
            let textvalue = match.textContent || match.innerHmtl

            if(textvalue.toUpperCase().indexOf(arama) > -1){
                kiyafet[i].style.display= "";
            }else{
                kiyafet[i].style.display="none";
            }
        }
    }

    
    
}




   

















