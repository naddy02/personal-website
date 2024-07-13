document.addEventListener('DOMContentLoaded', function () {
    var nextPageLink = document.querySelector('.next-page-link');

    nextPageLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Your custom actions before navigating to the next page

        // Navigate to the next page
        window.location.href = "About me.html";
        window.location.href = "Song.html";
        window.location.href = "Game.html";

    });
});
