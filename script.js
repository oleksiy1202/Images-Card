function changeImage(imageId, buttonId, textId, firstImage, secondImage) {
    const img = document.getElementById(imageId)
    const button = document.getElementById(buttonId)
    const textElement = document.getElementById(textId)

    // Додаємо клас 'clicked' при натисканні на кнопку
    button.classList.add('clicked')
    setTimeout(() => button.classList.remove('clicked'), 200)

    if (img.src.includes(firstImage.split('/').pop())) {
        img.src = secondImage
        button.innerText = 'Зображення після'
        textElement.innerText = 'фото після'
    } else {
        img.src = firstImage
        button.innerText = 'Зображення до'
        textElement.innerText = 'фото до'
    }
}
