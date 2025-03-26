document.getElementById('arrow-down').addEventListener('click', function(e) {
    e.stopPropagation();
    var logoutDiv = document.getElementById('logout');
    if (logoutDiv.style.display === 'none' || logoutDiv.style.display === '') {
        logoutDiv.style.display = 'block';
    } else {
        logoutDiv.style.display = 'none';
    }
});
document.getElementById('Menu').addEventListener('mouseover', function() {
    document.getElementById('header').classList.add('show-before');
});

document.getElementById('Menu').addEventListener('mouseout', function() {
    document.getElementById('header').classList.remove('show-before');
});