async function getCats(){
    const request = await fetch('https://cataas.com/api/tags');
    const res = await request.json();
    console.log(res);
    const tag1 = res.slice(4, 9);
    console.log(tag1);
    const tag2 = res.slice(14, 19);
    console.log(tag2);
    const tags = tag1.concat(tag2);
    console.log(tags);
    const select = document.querySelector('select');
    tags.forEach(el => { 
        const option = document.createElement("option");
        option.value = el;
        option.textContent = el;
        select.appendChild(option);
    });
    const containerHtml = document.querySelector('.containerImg');
    select.addEventListener('change', async () => {
        const request = await fetch(`https://cataas.com/cat/${select.value}?json=true`);
        const res = await request.json();
        console.log(res);
        const img = document.createElement('img');
        img.src = `https://cataas.com/${res.url}`;
        document.querySelectorAll('img').forEach( el => {
            el.remove();
        });
        containerHtml.appendChild(img);
    
    })
};

getCats();