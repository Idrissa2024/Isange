document.addEventListener('DOMContentLoaded', () => {
    const loadDataBtn = document.getElementById('loadDataBtn');
    loadDataBtn.addEventListener('click', () => {
        fetch('/php/data.php')
            .then(response => response.json())
            .then(data => {
                const dataOutput = document.getElementById('dataOutput');
                dataOutput.innerHTML = JSON.stringify(data);
            })
            .catch(error => console.error('Error:', error));
    });
});
