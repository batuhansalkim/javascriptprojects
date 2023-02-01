class Music{
    constructor(title, singer, img, file){
        this.title =title;
        this.singer=singer;
        this.img =img;
        this.file=file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Lia Shine", "Aden P2", "1.jpg","1.mp3"),
    // new Music("Unutulacak Dünler", "Gazapizm", "2.jpg","2.mp3"),
    // new Music("İzmir Marşı", "Haluk Levent", "3.jpg","3.mp3"),
    new Music("Harikalar Diyarında II ", "No.1", "4.jpg","4.mp3"),
    new Music("Hayatım Leş","Mavi Gri","5.jpg","5.mp3"),
    new Music("Nerdesin","Hidra","6.jpg","6.mp3")
]







