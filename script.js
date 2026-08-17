// ============================================================
// BIRTHDAY CARD — PERSONALIZE THIS SECTION
// ============================================================

const boyfriendName = "my love, Anu";

const birthdayMessage = `Sometimes I think about how crazy it is that we met as complete strangers at a wedding. I know I've said this before but meeting you in that Airbnb, there was something in me that just knew you were going to become someone incredibly important to me. I obviously didn't know what our story would look like yet, but there was this feeling that meeting you was going to matter.

And then, somehow, that feeling turned into you.

We went long distance immediately, which is something I know you weren't sure you wanted to do again. But you took a chance on me. You trusted me enough to jump into something that scared you, and I don't think I'll ever take that for granted. You chose to see where this could go, even when it would have been easier not to.

I still remember how excited I was for our first FaceTime call. I was sitting there eating that sandwich and asparagus, while you made fun of me for being "white," and somehow that little, ordinary moment became one of the memories that I treasure so much. 

I remember how excited I was when you finally asked me to be your girlfriend (after the first two times). And yes, I will always make fun of our little miscommunication for that. But underneath all the teasing, I was just so incredibly happy that you were choosing me.

And then the first "I love you."

Yes... technically, I had to force you to say it first. But eventually, we got there. And hearing those words from you for the first time is something I'll never forget. I think that's one of the things I love most about us: how our relationship has grown through all of these little moments that, at the time, felt like everything.

Then I got to experience your brother's wedding with you, and that weekend made me realize something even more clearly: being next to you and being around your family feels so natural to me. Like I'm exactly where I'm supposed to be. I loved getting to be part of such an important moment in your family's life, and I loved getting to experience it by your side. And, of course, all of our sneaky lil make-out sessions that weekend made everything so much more fun.

Long distance isn't easy. I miss you in ways that are hard to put into words. I hate not being able to reach for you, hug you, kiss you, and just exist beside you without having to think about when we'll be able to see each other next

But even knowing how hard it can be, I would make the same decision every single time.

In every lifetime, in every version of our story, I would choose to be your girlfriend.

I love our little routines. I love falling asleep on FaceTime with you every night. I love that no matter how tired we are, somehow we still end our nights by telling each other "I love you." I love that those words have become such a natural part of our lives. And I love that even when we argue, even when we're frustrated with each other, even when things aren't perfect, my love for you never disappears.

It doesn't fade.

And it never will.

You have shown me what I think true love is supposed to feel like. Not perfect, not without disagreements or hard days, but safe. Natural. Easy. You make loving me seem so natural and so easy and loving you feels exactly the same way.

I don't have to try to love you. I just do.

I love you in the exciting moments and the boring ones. I love you when we're laughing until we can't breathe, and I love you when we're annoyed with each other. I love you across the miles, through a FaceTime screen, in the middle of the night, and in all the little moments in between.

And I cannot wait until Labor Day weekend, when I get to see you in St. Louis and finally be in your arms again. I cannot wait to hug you for way too long, kiss you, annoy you in person, and just be with you. I can't wait for all the moments we haven't gotten to have yet.

You have become such a huge part of my life, and I hope you know how deeply grateful I am that our paths crossed that day at that wedding. Out of all the people, all the places, all the circumstances that could have brought us together, somehow it was you and me.

And I would choose you all over again.

Happy birthday, my love.

Thank you for choosing me. Thank you for trusting me. Thank you for loving me. Thank you for showing me what it feels like to be loved by someone who makes love feel effortless.

I hope you always know that you have my whole heart.

And no matter how many miles are between us, no matter how many arguments we have, no matter what life throws at us, there is one thing I will always know for sure:

I love you. And I always will.

Happy birthday, baby. I love you more than you know. ❤️`;

// ============================================================
// PAGE LOGIC
// ============================================================

const screens = {
  intro: document.getElementById("intro"),
  letter: document.getElementById("letter"),
  memories: document.getElementById("memories"),
  final: document.getElementById("final")
};

const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");
const memoriesBtn = document.getElementById("memoriesBtn");
const finalBtn = document.getElementById("finalBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const boyfriendNameEl = document.getElementById("boyfriendName");
const messageEl = document.getElementById("message");
const signatureEl = document.getElementById("signature");

boyfriendNameEl.textContent = boyfriendName;

function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[screenName].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function typeMessage(text, speed = 28) {
  messageEl.innerHTML = "";
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  messageEl.appendChild(cursor);

  let index = 0;

  function typeNext() {
    if (index < text.length) {
      const character = text[index];

      if (character === "\n") {
        cursor.before(document.createElement("br"));
      } else {
        cursor.before(document.createTextNode(character));
      }

      index++;
      setTimeout(typeNext, character === "." || character === "!" ? speed * 3 : speed);
    } else {
      cursor.remove();
      signatureEl.classList.remove("hidden");
      memoriesBtn.classList.remove("hidden");
    }
  }

  typeNext();
}

function openLetter() {
  showScreen("letter");
  setTimeout(() => typeMessage(birthdayMessage), 650);
  startFloatingHearts();
}

openBtn.addEventListener("click", openLetter);
gift.addEventListener("click", openLetter);

gift.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLetter();
  }
});

memoriesBtn.addEventListener("click", () => {
  showScreen("memories");
});

finalBtn.addEventListener("click", () => {
  showScreen("final");
  startFloatingHearts();
});

celebrateBtn.addEventListener("click", () => {
  heartExplosion();
  startFloatingHearts(35);
});

// ============================================================
// FLOATING HEARTS
// ============================================================

function startFloatingHearts(amount = 12) {
  const container = document.querySelector(".hearts");

  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = ["♥", "♡", "✦", "✧"][Math.floor(Math.random() * 4)];

      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${12 + Math.random() * 20}px`;
      heart.style.animationDuration = `${5 + Math.random() * 7}s`;
      heart.style.animationDelay = `${Math.random() * 1.5}s`;

      container.appendChild(heart);

      setTimeout(() => heart.remove(), 14000);
    }, i * 250);
  }
}

// ============================================================
// HEART CONFETTI
// ============================================================

function heartExplosion() {
  const container = document.querySelector(".hearts");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 80; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♥", "♡", "✦", "🎉", "✨"][Math.floor(Math.random() * 5)];

    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;
    heart.style.bottom = "auto";
    heart.style.opacity = "1";

    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 500;

    heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    heart.style.animation = `burst ${1 + Math.random() * 1.5}s ease-out forwards`;

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }
}

// Start with a subtle background effect.
startFloatingHearts(8);
