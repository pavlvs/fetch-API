document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {

            document.getElementById('output').innerHTML = data;
        })
        .catch(err => {
            console.log(err);
        });
}

function getJSON() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(post => {
                output += `<h3>${post.title}</h3>
                <p>${post.body}</p>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(user => {
                output += `<h3>${user.login}</h3>
                <p><a href='${user.html_url}'>${user.html_url}</a></p>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}