let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("glow");
let about = document.getElementById("about");
let conta = document.getElementById("conta");
let farpic = document.getElementById("farpic");
let product = document.getElementById("product");
let title_text = document.getElementById("title_text");
let text_span = document.getElementById("text_span");
let h3_text = document.getElementById("h3_text");
let our_product = document.getElementById("our_product");
let tit1 = document.getElementById("tit1");
let tex1 = document.getElementById("tex1");
let insdethefarm = document.getElementById("insdethefarm");
let card_text1 = document.getElementById("card_text1");
let card_span1 = document.getElementById("card_span1");
let card_text2 = document.getElementById("card_text2");
let card_span2 = document.getElementById("card_span2");
let card_text3 = document.getElementById("card_text3");
let card_span3 = document.getElementById("card_span3");
let Our_Products = document.getElementById("Our_Products");
let cards_text1 = document.getElementById("cards_text1");
let cards_p1 = document.getElementById("cards_p1");
let cards_text2 = document.getElementById("cards_text2");
let cards_p2 = document.getElementById("cards_p2");
let contact_text = document.getElementById("contact_text");
let send_text = document.getElementById("send_text");
let copyright = document.getElementById("copyright");
let copyname = document.getElementById("copyname");
let message = document.getElementById("message");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};
Francais.onclick = ()=>{
    setLanugage("Francais");
    localStorage.setItem("Lang","Francais");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    glow.innerHTML = "ريش بيري";
    about.innerHTML = "حولنا";
    farpic.innerHTML = "صور لمزارعنا";
    product.innerHTML = "منتجاتنا";
    conta.innerHTML = "اتصل بنا";
    title_text.innerHTML = "هذا موقع ريش بيري";
    text_span.innerHTML = "الفواكه الحمراء";
    h3_text.innerHTML = "هي شركة محترفة في إنتاج الفواكه الحمراء مثل (الفراولة والتوت)،بجودة عالية و منتوج طبيعي و مفيد";
    our_product.innerHTML = "عرض منتجاتنا";
    tit1.innerHTML = "معلومات عنا";
    tex1.innerHTML = "شركة ريتش بيري هي شركة متخصصة في زراعة وبيع الفراولة والتوت العضوي الطازج. تأسست في عام 2018 ، نمت الشركة لتصبح واحدة من الموردين الرئيسيين للتوت الطازج في المنطقة. تلتزم الشركة بتقديم أجود أنواع التوت لعملائها وتزرع جميع ثمار التوت في وقت محدد ويتم حصادها في ذروة النضج لضمان أفضل نكهة وتغذية ، مع التزامها بالجودة والاستدامة. تعتبر الشركة خيارًا رائعًا لأي شخص يبحث عن التوت الطازج بجودة جيدة";
    insdethefarm.innerHTML = "داخل المزرعة";
    card_text1.innerHTML = "الإدارة";
    card_span1.innerHTML = "إدارة ريش بيري";
    card_text2.innerHTML = "النبات";
    card_span2.innerHTML = "نبات الفراولة";
    card_text3.innerHTML = "النبات";
    card_span3.innerHTML = "نبات التوت";
    Our_Products.innerHTML = "منتجاتنا";
    cards_text1.innerHTML = "الفراولة"; 
    cards_p1.innerHTML = "الفراولة هي فاكهة حمراء صغيرة حلوة وهي عضو في عائلة الورد. إنها واحدة من أكثر الفواكه شعبية في العالم ويستمتع بها الناس من جميع الأعمار تعتبر الفراولة مصدرًا رائعًا للفيتامينات والمعادن ، بما في ذلك فيتامين سي وحمض الفوليك والبوتاسيوم والمنغنيز. كما أنها مصدر جيد للألياف الغذائية ، مما يساعدك على الشعور بالشبع والرضا";
    cards_text2.innerHTML = "توت العُليق";
    cards_p2.innerHTML = "توت العليق هو فاكهة حمراء صغيرة صالحة للأكل تنتمي إلى جنس روبوس من عائلة الورد.  توت العليق فاكهة مغذية ولذيذة يمكن أن توفر مجموعة متنوعة من الفوائد الصحية. إنها مصدر كبير للفيتامينات والمعادن ومضادات الأكسدة والألياف الغذائية ويمكن أن تساعد في تقليل الالتهاب وتعزيز صحة الجهاز الهضمي";
    contact_text.innerHTML = "تواصل معنا";
    send_text.innerHTML = "إرسال";
    copyright.innerHTML =  "حقوق النشر @ ريش بيري"

}else if(getLanuage ==="english"){
    glow.innerHTML = "RICH BERRY";
    about.innerHTML = "About";
    farpic.innerHTML = "Farm Pictures";
    product.innerHTML = "Products";
    title_text.innerHTML = "This is the rich berry website";
    conta.innerHTML = "Contact";
    text_span.innerHTML = "Red fruits";
    h3_text.innerHTML = "Is a Professional Company in The Production of Red Fruits Such as (Strawberries and Raspberries).";
    our_product.innerHTML = "View Our Products";
    tit1.innerHTML = "ABOUT US";
    tex1.innerHTML = "The Rich Berry Company is a business that specializes in growing and selling fresh, organic strawberries and raspberries. Founded in 2018, the company has grown to become one of the region's leading suppliers of fresh berries. The company is committed to providing the highest quality berries to its customers. All of their berries are grown at a specific time and harvested at the peak of ripeness to ensure the best flavor and nutrition, with its commitment to quality and sustainability, the Rich Berry Company is a great choice for anyone looking for fresh, berries with good quality.";
    insdethefarm.innerHTML = "Inside The Farm";
    card_text1.innerHTML = "The Administration";
    card_span1.innerHTML = "Rich Berry Administration";
    card_text2.innerHTML = "The Plant";
    card_span2.innerHTML = "The Strawberry Plant";
    card_text3.innerHTML = "The Plant";
    card_span3.innerHTML = "The Raspberry Plant";
    Our_Products.innerHTML = "Our Products";
    cards_text1.innerHTML = "Strawberry";
    cards_p1.innerHTML = "A strawberry is a small, sweet, red fruit that is a member of the rose family. It is one of the most popular fruits in the world and is enjoyed by people of all ages. Strawberries are a great source of vitamins and minerals, including vitamin C, folate, potassium, and manganese. They are also a good source of dietary fiber, which helps to keep you feeling full and satisfied";
    cards_text2.innerHTML = "Raspberry";
    cards_p2.innerHTML = "Raspberry is a small, edible, red fruit that belongs to the genus Rubus of the rose family. Raspberries are a nutritious and delicious fruit that can provide a variety of health benefits. They are a great source of vitamins, minerals, antioxidants, and dietary fiber, and they can help to reduce inflammation and promote digestive health.";
    contact_text.innerHTML = "Contact Us";
    send_text.innerHTML = "Send";
    copyright.innerHTML = "Copyrights @ RICH BERRY ";
    
}
else if(getLanuage ==="Francais"){
    glow.innerHTML = "RICH BERRY";
    about.innerHTML = "À propos";
    farpic.innerHTML = "Photos de la ferme";
    product.innerHTML = "Produits";
    title_text.innerHTML = "Ceci est le site Web de Rich Berry";
    conta.innerHTML = "Contact";
    text_span.innerHTML = "Fruits Rouges";
    h3_text.innerHTML = "cette entreprise professionnelle dans la production de fruits rouges tels que (fraises et framboises).";
    our_product.innerHTML = "Voir nos produits";
    tit1.innerHTML = "À PROPOS DE NOUS";
    tex1.innerHTML = "Rich Berry est une entreprise spécialisée dans la culture et la vente de fraises et de framboises fraîches et biologiques. Fondée en 2018, l'entreprise s'est développée pour devenir l'un des principaux fournisseurs de baies fraîches de la région. L'entreprise s'engage à fournir à ses clients des baies de la plus haute qualité. Toutes leurs baies sont cultivées à un moment précis et récoltées au sommet de la maturité pour assurer la meilleure saveur et la meilleure nutrition, avec son engagement envers la qualité et la durabilité, la Rich Berry Company est un excellent choix pour tous ceux qui recherchent des baies fraîches avec de bonnes qualité.";
    insdethefarm.innerHTML = "À l'intérieur de la ferme";
    card_text1.innerHTML = "L'administration";
    card_span1.innerHTML = "Rich Berry Administration";
    card_text2.innerHTML = "La plante";
    card_span2.innerHTML = "Fraisier";
    card_text3.innerHTML = "La plante";
    card_span3.innerHTML = "framboisier";
    Our_Products.innerHTML = "Nos produits";
    cards_text1.innerHTML = "Fraise";
    cards_p1.innerHTML = "Une fraise est un petit fruit rouge sucré qui fait partie de la famille des roses. C'est l'un des fruits les plus populaires au monde et il est apprécié par les personnes de tous âges. Les fraises sont une excellente source de vitamines et de minéraux, dont la vitamine C, le folate, le potassium et le manganèse. Ils sont également une bonne source de fibres alimentaires, ce qui vous aide à vous sentir rassasié et satisfait.";
    cards_text2.innerHTML = "Framboise";
    cards_p2.innerHTML = "La framboise est un petit fruit rouge comestible qui appartient au genre Rubus de la famille des roses. Les framboises sont un fruit nutritif et délicieux qui peut offrir une variété d'avantages pour la santé. Ils sont une excellente source de vitamines, de minéraux, d'antioxydants et de fibres alimentaires, et ils peuvent aider à réduire l'inflammation et à favoriser la santé digestive.";
    contact_text.innerHTML = "Contactez-nous";
    send_text.innerHTML = "Envoyer";
    copyright.innerHTML = "Copyrights @ RICH BERRY "; 
}
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
