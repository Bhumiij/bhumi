document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const heartsContainer = document.getElementById("hearts-container");
  let stage = 0;

  // Generate Floating Hearts
  const generateHearts = () => {
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 3}s`;
      heart.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(${Math.random() * 360}, 70%, 60%)">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      `;
      heartsContainer.appendChild(heart);
    }
  };

  // Render Content Based on Stage
  const renderContent = () => {
    content.innerHTML = "";
    if (stage === 0) {
      content.innerHTML = `
        <div class="text-center animate-fade-in">
          <h1 class="text-5xl font-bold text-purple-800 mb-8">Happy Birthday Lieutenant &#x2764;&#xfe0f;</h1>

          <button class="button" onclick="nextStage()">Start Surprise</button>
        </div>
      `;
    } else if (stage === 1) {
      content.innerHTML = `
        <div class="animate-slide-up">
         <h2 class="text-3xl font-semibold text-indigo-700 mb-4">
  <span class="text-pink-600">❤️</span> A glimpse of the love in my heart for you <span class="text-pink-600">❤️</span>
</h2>
          <div class="flex justify-center space-x-4 mb-8">
            <!-- Placeholder for hearts -->
          </div>
          <button class="button" onclick="nextStage()">Continue</button>
        </div>
      `;
    } else if (stage === 2) {
      content.innerHTML = `
        <div class="bg-white bg-opacity-80 rounded-xl p-8 shadow-2xl max-w-xl mx-auto animate-slide-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-indigo-500 mb-4">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <h2 class="text-3xl font-semibold text-indigo-700 mb-4">A Special Message Just for You</h2>
          <p class="text-xl text-gray-800 italic">
  I know we don’t talk much, and it feels like ever since we got into a relationship, our conversations have become even fewer. Maybe it’s because there are some things about me that you don’t like, and there are some things about you that I find hard to understand. Plus, we both have time constraints that don’t help either.
</p>

<p class="text-xl text-gray-800 italic mt-4">
  But despite all of this, I want to tell you that I genuinely like you — a lot. I don’t know how you feel, but I can only speak for myself. I don’t express my feelings often, but whenever I do, they come straight from the heart. And today is no exception — I really, truly love you.
</p>

<p class="text-xl text-gray-800 italic mt-4">
  I pray that you achieve everything you’ve ever wished for and that you always remain happy. Being a CSE student, I created this little site as a way to wish you in a unique way. I thought it might bring a smile to your face while also helping me polish my skills.
</p>

<p class="text-xl text-gray-800 italic mt-4">
  But beyond all of that, my wish for you is simple: may you always do your best and become the best version of yourself.
</p>

<p class="text-xl text-gray-800 italic mt-4">
  Happy Birthday once again! And one last thing — I love you ❤️
</p>

        </div>
      `;
    }
  };

  // Advance to the Next Stage
  window.nextStage = () => {
    stage++;
    renderContent();
  };

  // Initialize Page
  generateHearts();
  renderContent();
});
