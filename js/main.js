var instance = new vidbg(".video", {
  mp4: "video/world.mp4", // URL or relative path to MP4 video
  webm: "video/world.webpm", // URL or relative path to webm video
  poster: "video/poster.jpg", // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});

AOS.init();


var rellax = new Rellax(".rocket");

if (document.body.clientWidth < 730) {
  rellax.destroy();
}
if (document.body.clientWidth < 576) {
  rellax.destroy();
}
if (document.body.clientWidth < 500) {
  rellax.destroy();
}
if (document.body.clientWidth < 425) {
  rellax.destroy();
}
if (document.body.clientWidth < 375) {
  rellax.destroy();
}