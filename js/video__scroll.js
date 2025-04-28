const video = document.getElementById("video_mirage");
const container = document.getElementById("tendencia__mirage");


container.addEventListener('scroll', () => {
    const scrollPosition = container.scrollTop;
    const alturaContainer = container.offsetHeight;
    const tiempoVideo = video.duration;
  
    // Calcula el tiempo actual del video
    const tiempoActual = (scrollPosition / alturaContainer) * tiempoVideo;
  
    // Establece el tiempo actual del video
    video.currentTime = tiempoActual;
  });
  
