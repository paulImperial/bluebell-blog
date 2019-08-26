const fetch = require('node-fetch');

console.log('Starting import of JSON blogs....');

fetch('http://localhost:3000/posts/')
    .then(res => res.json())
    .then(json => transformData(json));

console.log('Complete.');

console.log('Collecting Posts...');

const transformData = data => {
    //transform here
    let publishedPosts = [];
    let count = 0;

    data.map((post)=>{
       if (post.post_status === 'publish'){
           publishedPosts.push(post)
        };
    })

    console.log(`Found ${publishedPosts.length} blogs`);

}
