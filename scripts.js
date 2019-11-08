
var questions = ["Vilket av dessa är ett rovdjur? <br> (a) Rådjur, (b) Varg, (c) Ko (d) Get",
 "Vad kallades vikingarnas båtar?<br>( a)Träskepp(b )Långskepp( c)Roddskepp(d)Vågskepp",
 "Isbjörnar och valrossar ser väldigt olika ut, men båda kan överleva där det är mycket kallt. En isbjörn har en tjock päls som hjälper den att hålla sig varm. Valrossen har ingen tjock päls.<br>Vad håller valrossen varm?<br>( a)Fettlager(b )Betar( c)Morrhår( d)Simfötter",
 "Hur många procent är en fjärdedel?<br>( a)20 procent( b)33 procent( c)25 procent( d)40 procent",
 "Detta är ett känt företag som har sitt ursprung i Danmark, vad heter det?<br>( a)Stena( b)IBM( c)Saab( d)Mærsk",
 "Vetenskapsmän tror att haven en gång täckte mycket av det som nu är land. Vilken av dessa saker som hittades på land ledde till att vetenskapsmän tror det?<br>( a)Vattengrottor( b)Sandig jord( c)Saltvattensjöar( d)Fossiler av fisk",
  "Vilken är den största staden?<br>(a )Oslo( b)Helsingfors(c )Köpenhamn( d)Reykjavik", 
  "Vilket är ett ryggradsdjur?<br>(a)Trollslända( b)Vithaj( c)Krabba( d)Snigel",
  "Vår kropp består till 50-65 procent av detta.<br>( a)Kol(b )Vatten(c)Blod( d)Ben",
   "XX she old?<br>( a)Are( b)Is( c)Am(d)As",
   "Vilken grupp här nedanför innehåller endast kräldjur?<br>( a)Ödla, sköldpadda, orm( b)Ödla, krokodil, grävling(c )Bläckfisk, snigel, sköldpadda(d )Krabba, daggmask, orm",
  "Vad kallades en person som ägdes av sin husbonde under vikingatiden?<br>( a)Slav(b )Träl( c)Sork( d)Fånge",
  "Var ligger Medelpad?<br>( a)Norrbottens län(b )Västernorrlands län(c)Jämtlands län( d)Örebro län",
  "Kalcium är ett mineral som hjälper till att göra ens ben och tänder starka. Vilken av dessa varor innehåller mest kalcium?<br>(a )Godis( b)Ris( c)Ost( d)Kött",
  "Vad heter Schweiz huvudstad?<br>( a)Geneve( b)Zürich( c)Bern( d)Basel", 
  "Vad är ett substantiv för något?<br>( a)Ord som man kan sätta att framför(b)Ord som man kan sätta en, ett eller flera framför(c)Ord som beskriver något( d)Ord som anger siffror",
"Hur stavas krut på engelska?<br>( a)Gunpower( b)Gun powder( c)Gunpowder( d)Gunnpowder",
"Vilken är Sveriges största insjö?<br>( a)Vättern( b)Storsjön( c)Mälaren( d)Vänern",
"Vilken är den bästa källan till vitaminer och mineraler?<br>( a)Kött, fisk och fågel(b )Mjölk och mjölkprodukter( c)Frukt och grönsaker( d)Bröd, ris och pasta",
"Vilken är ordningen från kallast till varmast?<br>(a)Is, vatten, ånga(b)Is, ånga, vatten(c)Ånga, is, vatten( d)Ånga, vatten, is"];
var correctAnswer = ["B","D","A","C","D","D","C","B","B","B","A","B","B","C","C","B","C","D","C","A"];
var answer = [];
 var num= 0;
 var val=""
 var correct = 0;

// Kollar svaret
function checkAnswer(val){
var color = ["red", "green", "lightblue"];
 var elem = document.body;
 var orginal = window.getComputedStyle(elem, null).getPropertyValue("background-color");
answer[num]=document.getElementsByClassName('answer'.innerHTML);
 // alert(num);
 
if (num < 19) {
	answer[num] = val;
			if (answer[num] == correctAnswer[num]) {
				document.body.style.backgroundColor = color[1];
				setTimeout(function(){
     		  document.body.style.backgroundColor = color[2];
     		   }, 500); 
				correct= correct + 1;} else {
				document.body.style.backgroundColor = color[0];
				setTimeout(function(){
      			 document.body.style.backgroundColor = color[2];
			   }, 500);
			
			}

	num = num +1;
	document.getElementById("Question").innerHTML = questions[num];
} else {
	 document.getElementById('start').style.visibility = 'visible';
	 document.getElementsByClassName('answer')[0].style.visibility = 'hidden';
	 document.getElementsByClassName('answer')[1].style.visibility = 'hidden';
	 document.getElementsByClassName('answer')[2].style.visibility = 'hidden';
	 document.getElementsByClassName('answer')[3].style.visibility = 'hidden';
	 document.getElementById("Question").innerHTML = 'Du är färdig och hade'  + correct + ' rätt';
	 document.getElementById('start').innerHTML = "Starta igen";
	 num = 0;
	 val = "";
	 correct = 0;
}
}


document.getElementById("start").addEventListener("click", start);
document.getElementsByClassName('answer')[0].addEventListener("click", function() {
  checkAnswer('A');
});
document.getElementsByClassName('answer')[1].addEventListener("click", function() {
  checkAnswer('B');
});
document.getElementsByClassName('answer')[2].addEventListener("click", function() {
  checkAnswer('C');
});
document.getElementsByClassName('answer')[3].addEventListener("click", function() {
  checkAnswer('D');
});
	


//Startar/visar spelet
function start() {
  document.getElementById('start').style.visibility = 'hidden';
 document.getElementsByClassName('answer')[0].style.visibility = 'visible';
 document.getElementsByClassName('answer')[1].style.visibility = 'visible';
 document.getElementsByClassName('answer')[2].style.visibility = 'visible';
 document.getElementsByClassName('answer')[3].style.visibility = 'visible';
 document.getElementById("Question").innerHTML = questions[0];

}