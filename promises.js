let posts=[];
function printPost(post,time){
  
    setTimeout(()=>{
        const bodyElement= document.querySelector('ul');
        const li = document.createElement('li');
        const txtNode = document.createTextNode(post.title+ " created at " + Math.floor((new Date().getTime() - post.createdAt)/1000)+" seconds ago" );
          
        li.appendChild(txtNode);
        bodyElement.appendChild(li);
 },time);
}
 
 function createPost(post,time)
 {
       posts.push({...post,createdAt: new Date().getTime()} );
       printPost(post,time);
 }

 function deletePost(time)
 {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const bodyElement= document.querySelector('ul');
          const lastChild = bodyElement.lastChild;
          
          if(lastChild != null){
            bodyElement.removeChild(lastChild);
            resolve();
          }
          else
          reject('Array is empty');
        },time);

       });
 }
 
   
    
    createPost({title:'Post one',body:'this is post one',createdAt:new Date().getTime()},1000);
    createPost( {title:'Post two',body:'this is post two',createdAt:new Date().getTime()},2000);
    createPost({title:'Post three',body:'this is post three',createdAt:new Date().getTime()},3000);

 
 deletePost(4000)
 .then(()=>{console.log('success')})
 .catch((error)=>{console.log(error)});
 deletePost(5000)
 .then(()=>{console.log('success')})
 .catch((error)=>{console.log(error)});
 deletePost(6000)
 .then(()=>{console.log('success')})
 .catch((error)=>{console.log(error)});
 deletePost(7000)
 .then(()=>{console.log('success')})
 .catch((error)=>{console.log(error)});

 createPost({title:'Post four',body:'this is post four',createdAt:new Date().getTime()},8000);
 deletePost(9000)
 .then(()=>{console.log('success')})
 .catch((error)=>{console.log(error)});
 deletePost(10000)
 .then(()=>{console.log('success')})
 .catch((error)=>{console.log(error)});

 