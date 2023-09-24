
function refresh(){
    location.reload();
}

var informations = [
    {
        "title" : "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ",
        "text" : "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]. ",
        "count" : 1,
        "tinyText" : "من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح."
    },
    {
        "title" : "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
        "text" : "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.",
        "count" : 3,
        "tinyText" : "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين). "
    },
    {
        "title" : "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
        "text" : "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. ",
        "count" : 3,
        "tinyText" : ""
    },
    {
        "title" : "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
        "text" : "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. ",
        "count" : 3,
        "tinyText" : ""
    },
    {
        "title" : "",
        "text" : "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. ",
        "count" : 1,
        "tinyText" : ""
    },
    {
        "title" : "",
        "text" : "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ . ",
        "count" : 1,
        "tinyText" : "من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح."
    },
    {
        "title" : "",
        "text" : "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. ",
        "count" : 3,
        "tinyText" : "من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة."
    },
    {
        "title" : "",
        "text" : "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك. ",
        "count" : 4,
        "tinyText" : "من قالها أعتقه الله من النار."
    },
    
]

var finish = document.querySelector(".finish");

var app = document.querySelector(".app");
var count = 0;

let mot = document.querySelector(".mot");


informations.forEach((el) => {
    count += el.count;
    
    let element = document.createElement("div");
    element.classList.add("element");
    app.appendChild(element);

    var button = document.createElement("button");
    button.innerHTML = el.count;
    element.appendChild(button);

    let text = document.createElement("div");
    text.classList.add("text");
    element.appendChild(text);

    let h2 = document.createElement("h2");
    h2.innerHTML = el.title;
    text.appendChild(h2);

    let p = document.createElement("p");
    p.innerHTML = el.text;
    p.style.borderTop = "1px solid #93B1A6"
    p.style.borderBottom = "1px solid #93B1A6"
    p.style.background = "#fff"
    
    text.appendChild(p);


    let span = document.createElement("span");
    span.innerHTML = el.tinyText;
    span.style.color = "green"
    text.appendChild(span);
    

    button.addEventListener("click",function(){
        decrease(button);
    })

    mot.innerHTML = count;

})

function decrease(btn){

    if(btn.innerHTML >= 1)
    {
        btn.innerHTML = btn.innerHTML - 1;
        count--;
        mot.innerHTML = count;

        let audio = new Audio("sounds/click.mp3");
        audio.play();


        if(count == 0){
           let audio = new Audio("sounds/quran.mp3");
           audio.play();
           finish.style.display="block";
        }



    }
    if(btn.innerHTML == 0){
        btn.innerHTML = '<i class="ri-heart-fill"></i>';

    }

  

    
}
