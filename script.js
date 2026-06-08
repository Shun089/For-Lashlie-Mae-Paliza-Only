
let rejectCount = 0;

const rejectBtn = document.getElementById("rejectBtn");
const funnyImage = document.getElementById("funnyImage");

// 🔊 Audio (created ONCE)
const acceptAudio = new Audio("2.mp3");
const rejectAudio = new Audio("reject.mp3");

// Save original NO button position
const originalRejectPosition = {
  position: rejectBtn.style.position || "static",
  left: rejectBtn.style.left || "",
  top: rejectBtn.style.top || ""
};


// 🔊 Safe play function (prevents overlap)
function playSound(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

// Show confession
function showConfession() {
  document.getElementById("confessionMessage").style.display = "block";
  document.getElementById("confessionMessage1").style.display = "block";
  document.getElementById("responseButtons").style.display = "flex";
  document.getElementById("yesBtn").style.display = "none";
}

// ✅ YES clicked
function accept() {
  resetResponses();
  resetRejectPosition();

  // stop NO sound, play YES sound
  rejectAudio.pause();
  rejectAudio.currentTime = 0;
  playSound(acceptAudio);

  const acceptResponse = document.getElementById("acceptResponse");
  acceptResponse.innerText = "You pressed yes?, I promise you’ll never regret giving me a chance.😊";

  const acceptResponse1 = document.getElementById("acceptResponse1");
  acceptResponse1.innerHTML = '<a href="https://www.instagram.com/nrl_dlngn/" target="_blank" style="color: #ff6f61; text-decoration: none;">Click here to send me a response on IG</a>';
  

  const gif = document.createElement("img");
  gif.src = "1.gif";
  gif.style.width = "150px";
  acceptResponse.appendChild(gif);
 } 
 

// ❌ NO clicked
function reject() {
  resetResponses();
  rejectCount++;
  
  // 🎥 HIDE VIDEO HERE
  document.getElementById("video").style.display = "none";

  // stop YES sound, play NO sound
  acceptAudio.pause();
  acceptAudio.currentTime = 0;
  playSound(rejectAudio);

  moveReject();

  const rejectResponse = document.getElementById("rejectResponse");
  rejectResponse.innerText = "You pressed no?, All good, thought I’d give it a shot."

  const rejectGif = document.createElement("img");
  rejectGif.src = "3.gif";
  rejectGif.style.width = "150px";
  rejectResponse.appendChild(rejectGif);

  if (rejectCount >= 2) {
    funnyImage.style.display = "block";
    }
    // ⬇️ RETURN BUTTON TO ORIGINAL POSITION
    setTimeout(resetRejectPosition, 300); // small delay so movement is visible
    }
  


// Move NO button randomly
function moveReject() {
  const maxX = window.innerWidth - rejectBtn.offsetWidth - 20;
  const maxY = window.innerHeight - rejectBtn.offsetHeight - 20;

  rejectBtn.style.position = "absolute";
  rejectBtn.style.left = Math.random() * maxX + "px";
  rejectBtn.style.top = Math.random() * maxY + "px";
}

// Helpers
function resetResponses() {
  document.getElementById("acceptResponse").innerHTML = "";
  document.getElementById("acceptResponse1").innerHTML = "";
  document.getElementById("rejectResponse").innerHTML = "";
}

function resetRejectPosition() {
  rejectBtn.style.position = originalRejectPosition.position;
  rejectBtn.style.left = originalRejectPosition.left;
  rejectBtn.style.top = originalRejectPosition.top;
}