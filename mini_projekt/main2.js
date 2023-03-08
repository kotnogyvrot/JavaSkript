const  url = new URL(location.href);
const id = url.searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
// fetch(apiURL+ id)
    .then(value => value.json())
    .then(value =>{

        for (const post of value) {
            let div = document.createElement('div');
            div.innerText = `${post.body}`;
            document.body.appendChild(div);
        }

    });