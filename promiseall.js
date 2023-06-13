const posts= [{title: 'POST1'},{title: 'POST2'}]
function getpost(){
    setTimeout(()=>{
        let output=""
        for(let i=0;i<posts.length;i++){
            output+=`<li>${post.title}</li>`
        };
        document.body.innerHTML=output
    },1000)

}

function createpost(post){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            posts.push(post)
            const error=false;
            if(!error){
                res()
            }
            else{
                rej("Error")
            }
            
        },2000)
    })
}



function deletepost(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(posts.values!=0){
                res(posts.pop());
            }
            else{
                rej("array is empty")
            }

            },1000)
    })
}
createpost({title: 'POST3'})
.then(getpost)
.catch(err=>console.log(err)
.then(deletepost)
.catch(err=>console.log(err)))
