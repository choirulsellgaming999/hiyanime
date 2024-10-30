// Fungsi untuk kembali ke halaman sebelumnya
function goBack() {
    window.history.back();
}

// Fungsi untuk toggle fullscreen
function toggleFullScreen() {
    const videoWrapper = document.querySelector('.video-wrapper');
    if (!document.fullscreenElement) {
        videoWrapper.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}