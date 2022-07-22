// const http = require('https')
const {get} = require('https')

// const req = http.request('https://www.google.com',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(`Data Chunk: ${chunk}`);
//     });
//     res.on('end',()=>{
//         console.log('No more Data');
//     })
// })

// req.end()


get('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`Data Chunk: ${chunk}`);
    });
    res.on('end',()=>{
        console.log('No more Data');
    })
})