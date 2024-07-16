function showMessage() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    document.getElementById('cryingAudio').play();
    let paragraphs = document.querySelectorAll('.message p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.opacity = 1;
        }, index * 1000); // 1 second delay for each paragraph
    });
}
