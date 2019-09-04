const getBtn = document.getElementById('get-btn');
const container = document.getElementById('req-container');

getBtn.addEventListener('click', async function () {
    await fetch('http://localhost:8080/api')
        .then(res => res.json())
        .then(res => res.forEach(obj => container.innerHTML += `<p>${obj.name}</p>`))
        .catch(() => container.innerHTML = '<h2 id="fail" style="color: red;">Something wrong happend... Try it again</h2>')
});
