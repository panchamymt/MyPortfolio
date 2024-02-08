document.addEventListener('DOMContentLoaded', function() {
    // Get the text element and the hidden list
    var showListText = document.getElementById('showListText');
    var hiddenList = document.getElementById('hiddenList');

    // Add a click event listener to the text element
    showListText.addEventListener('click', function() {
        // Toggle the visibility of the list
        if (hiddenList.style.display === 'none') {
            hiddenList.style.display = 'block';
        } else {
            hiddenList.style.display = 'none';
        }
    });
});
