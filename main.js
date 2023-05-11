// Letters
const letters = "ابتثجحخدذرزسشصضطظعغفقكلمنهويىئة";

// Get Array From letters 
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

  //create Span
  let span = document.createElement("span");

  // Create letter text Node 
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Dpan 
  span.appendChild(theLetter);

  // Add Class On Span 
  span.className = 'letter-box';

  // Append Span To THe Letters Container 
  lettersContainer.appendChild(span);

});

// Object Of Words + Categories
const words = {
  اسماء_انبياء: ["محمد", "ابراهيم", "موسى", "عيسى", "نوح", "يوسف", "ادريس", "هود"],
  شكل_هندسية: ["دائرة", "مربع", "مثلث", "مستطيل", "مكعب", "اسطوانة", "معين", "شبه منحرف"],
  حيوان: ["اسد", "نمر", "ثعلب", "دب", "كلب", "بقرة", "قرد"],
  بلد_عربية: ["سوريا", "فلسطين", "اليمن", "مصر", "السعودية", "قطر", "السودان", "ليبيا", "العراق", "الاردن", "الكويت", "عمان", "الامارات", "الجزائر", "المغرب", "مريتانيا", "تونس"]
}

// Get Random Property 
let AllKeys = Object.keys(words); // دي Method بتديها العنصر بترجعلك كل keys اللى جواه 
// console.log(AllKeys); // (4) ['programming', 'movies', 'people', 'countries']

// Random Number Depend On Keys Laength
let randomPropNumber = Math.floor(Math.random() * AllKeys.length); // بيجيب رقم عشوائي 

// Category
let randomPropName = AllKeys[randomPropNumber]; // يجب عنصر عشوائية من randomPropNumber

// category Words
let randomPropValue = words[randomPropName];  // يجب عنصر عشوائية من randomPropName

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chose word
let randomValueValue = randomPropValue[randomValueNumber];

// set category Info 
document.querySelector(".game-info .category span").innerHTML = randomPropName;
// document.querySelector(".game-info .category span").innerHTML = randomPropName + ' ' + randomValueValue;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array 
let lettersAndSpace = Array.from(randomValueValue); // بيرجع عنصر من عناصر words عنصر جواه على شكل Array

// Creat Spans Depened On Word
lettersAndSpace.forEach(letter => {

  // Create Empty Span 
  let emptySpan = document.createElement("span");

  // if letter Is Space
  if (letter === ' ') { // لو الكلمة فيها space 

    // Add Class To the span 
    emptySpan.className = 'with-space';

  }

  // Append Span TO The Letters Guess container
  lettersGuessContainer.appendChild(emptySpan);

});





// Select Guess Spans
let guessSpans = document.querySelectorAll('.letters-guess span')

// select Wrong Attempts  عدد المحاولات الخطئ 
let wrongAttempts = 0;

// select the Draw Element 
let theDraw = document.querySelector(".hamgman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {

  //set The Chose Status 
let theStatus = false; // لو  داس على الحرف الغلط  // حطيتها هنا علشان تبقى defolt false ولو بقت تحت true هيخليها true

  if (e.target.className === 'letter-box') { // لما تدوس على اي letter هيضيف عليه class (clicked)

    e.target.classList.add('clicked');

    // Get Clicked Letter 
    let theClickedLetter = e.target.innerHTML;

    // the Chosen Word
    let theChosenWord = Array.from(randomValueValue);

    theChosenWord.forEach((wordLetter, WordIndex) => { // الحرف و index بتاعه 

      // if the clicked Letter Equal To One Of the chosen Word Letter
      if (theClickedLetter == wordLetter){ // الحرف اللى انت هتختاره كان حرف من الكلمة المشار اليها  

      // Set Status To Correct 
      theStatus = true; // ما دام الحرف جوه loop ازن لو الحرف صح 

      // change color of Letter
      document.querySelector(".letters").style.backgroundcolor = "#fcfc09";

      // Loop On All Guess Spans
        guessSpans.forEach((spen, spanIndex) => {

          if(WordIndex === spanIndex) {

            spen.innerHTML = theClickedLetter;

            if (theChosenWord === randomValueValue) {

              good()
        
            }

          }

        });

        // console.log(`Found At Index Number ${WordIndex + 1}`); // هيرجعلك index بتاعها 

      } 

    });

    // Outside Loop

    

    // هيبدا رسم الرسمة في كل محاولة خطئ 
    // if Letter Is Wrong 
    if (theStatus !== true) {

      // change color of Letter
      document.querySelector(".letters").style.backgroundcolor = "#fcfc09";


      // Increase the Wrong Attempts  // هنزود هدد المحاولات الخطئ 
      wrongAttempts++;

      // add class wrong On the Draw Element 
      theDraw.classList.add(`wrong-${wrongAttempts}`); // هيطيف على hamgman-draw  wrong-(رقم الغلط)

      // play fail sound 
      document.getElementById("fail").play();

      

      if (wrongAttempts === 5) {

        endGame();

      }

    } else {

      // play succes sound
      document.getElementById("success").play();

    }

  }

});

// End Gamy Function
function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // create text If Fail  
  let divTextF = document.createTextNode(`حظ اوفر , الاجابة هي : ${randomValueValue}`);

  // append text to div 
  div.appendChild(divTextF);

  // add class On div 
  div.className = 'popup';

  // append to the body 
  document.body.appendChild(div);

  lettersContainer.classList.add("finched");

  document.getElementById("finchedd").play();

}

// Good Gamy Function
function good() {

  // Create Popup Div
  let divs = document.createElement("div");

  // create text If Fail  
  let divTexts = document.createTextNode(`اجابة صحيحة`);

  // append text to div 
  divs.appendChild(divTexts);

  // add class On div 
  divs.className = 'popup';

  // append to the body 
  document.body.appendChild(divs);

  lettersContainer.classList.add("good");

  document.getElementById("over-success").play();
};

  document.querySelector(".reset").onclick = function () {

    window.location.reload();

}





// if (theChosenWord === lettersGuessContainer) {

//   // create text If Succes
//   let divTextS = document.createTextNode(`احسنت اجابة صحيحة`);
//   div.appendChild(divTextS);

//   document.getElementById("over-success").play();
// }



// والحمد لله