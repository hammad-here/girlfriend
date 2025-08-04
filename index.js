const questions = [
      {
        text: "What’s my favourite thing about you",
        options: ["your hair", "your smile", "your voice", "your existence"],
        answer: "your existence"
      },
      {
        text: "Which song reminds me of you",
        options: ["Chan Kithan", "Cigarette daydream", "Bade Ache Lagte Hain", "All of the above"],
        answer: "All of the above"
      },
      {
        text: "What do I like calling you the most?",
        options: ["Munchkin", "Short Hair ", "In class", "Frinjywoman"],
        answer: "Short Hair "
      },
      {
        text: "What do I like doing to you the most",
        options: ["Poking your arm", "Ruining your hair", "Fistbumping", "Putting my hand on your shoulder"],
        answer: "Poking your arm"
      },
      {
        text: "What do you do to make me the happiest",
        options: ["Appreciate me", "Compliment me", "Work things out", "Post me"],
        answer: "Work things out"
      }
    ];
let MusicOn=false
let current=0
const container = document.getElementById("quiz-container");
const resultImage = document.getElementById("result-image");
const feedbackImage = document.getElementById("feedback-image");

function loadQuestion() {
    if (current >= questions.length) {
        container.innerHTML = `<h2 class="question">That's all 💞 Thanks for playing!</h2>`;
        return;
    }
    
    const q = questions[current];
    container.innerHTML = `
    <h2 class="question">${q.text}</h2>
    <div class="buttons">
    ${q.options.map(option => `
        <button onclick="handleAnswer('${option}')">${option}</button>
        `).join('')}
        </div>
        `;
    }
    
    function handleAnswer(selected) {
     if(!MusicOn){
        MusicOn=true
        document.getElementsByTagName("audio")[0].play()
      }
      const correct = questions[current].answer === selected;
      container.style.display = "none";
      feedbackImage.src = correct ? "yushaHappy.jpg" : "yushaCry.jpg"; // Replace with actual image paths
      resultImage.style.display = "block";

      setTimeout(() => {
        resultImage.style.display = "none";
        container.style.display = "block";
        current++;
        loadQuestion();
      }, 2000); // Show image for 2 seconds
    }

    window.onload = loadQuestion;
