// Ensure the video plays unmuted and starts automatically
const promoVideo = document.getElementById("promoVideo");
promoVideo.addEventListener("loadedmetadata", () => {
    promoVideo.play();
    promoVideo.muted = false; // Ensures the video plays with sound
});
