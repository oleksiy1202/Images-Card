function changeImage(imageId, buttonId, textId, firstImage, secondImage) {
    const img = document.getElementById(imageId);
    const button = document.getElementById(buttonId);
    const textElement = document.getElementById(textId);

    if (img.src.includes(firstImage.split('/').pop())) {
        Salute()
        img.src = secondImage;
        button.innerText = 'Зображення після';
        textElement.innerText = 'фото після';
        button.classList.add('clicked');
    } else {
        img.src = firstImage;
        button.innerText = 'Зображення до';
        textElement.innerText = 'фото до';
        button.classList.remove('clicked');
    }
}

function orderCall() {
    Swal.fire({
        title: "Зателефонувати?",
        icon: "question",
        confirmButtonText: "Так",
        cancelButtonText: "Ні",
        showCancelButton: true,
        showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            // Дія, якщо натиснуто "Так"
            console.log("Користувач погодився зателефонувати");
            Salute();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Дія, якщо натиснуто "Ні"
            console.log("Користувач відмовився зателефонувати");
        }
    });
}

function Salute() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

document.getElementById('startCamera').addEventListener('click', async function () {
    try {
        const videoElement = document.getElementById('video');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Помилка при доступі до камери:', error);
        alert('Не вдалося отримати доступ до камери: ' + error.message);
    }
});