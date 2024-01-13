function setOpacity(opacityNumber){
    const getBtnShare = document.querySelectorAll('.share');

    getBtnShare.forEach(function (btnShare) {
        btnShare.style.opacity = opacityNumber;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setOpacity(0);

    const shareIcon = document.querySelector('.share-icon');

    shareIcon.addEventListener('mouseenter', function () {
        setOpacity(1);
    });

    shareIcon.addEventListener('mouseleave', function () {
        setOpacity(0);
    });
})