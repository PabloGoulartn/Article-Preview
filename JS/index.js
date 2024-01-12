document.addEventListener('DOMContentLoaded', function() {
    const getBtnShare = document.querySelectorAll('.share');

    getBtnShare.forEach(function (btnShare) {
        btnShare.style.opacity = "0";
    });

    document.querySelector('.share-icon').addEventListener('mouseenter', function () {
        getBtnShare.forEach(function (btnShare) {
            btnShare.style.opacity = "1";
        });
    });

    document.querySelector('.share-icon').addEventListener('mouseleave', function () {
        getBtnShare.forEach(function (btnShare) {
            btnShare.style.opacity = "0";
        });
    });

})