const getBtn = document.getElementById('get-btn');
const container = document.getElementById('req-container');

getBtn.addEventListener('click', async function(){
    await fetch('http://localhost:3000/api')
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(() => container.innerHTML = '<h2 id="fail" style="color: red;">Something wrong happend... Try it again</h2>')
});