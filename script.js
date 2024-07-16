function nextStep(step) {
    if (step === 2) {
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
    } else if (step === 3) {
        document.getElementById('step2').classList.add('hidden');
        document.getElementById('step3').classList.remove('hidden');
        showMessages();  
    }
}

function showMessage() {
    nextStep(3);  
}

function showMessages() {
    document.getElementById('cryingAudio').play();
    let paragraphs = document.querySelectorAll('#message p');
    paragraphs.forEach((p, index) => {
        p.style.opacity = 0; 
        setTimeout(() => {
            p.style.opacity = 1; 
        }, index * 1000);
    });
}
