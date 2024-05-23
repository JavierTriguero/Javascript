// {
//     url:...
//     bucket:amazon s3
//     port: 80
// }
const config= {
    url: 'https://holamundo.io'
}

function configurarAPI(url,bucket,port){
    return `${url}/${bucket}:${port}`;
}
console.log(configurarAPI('https://holamundo.io','145',80))