const slots = ['first', 'second','third'] ;
const users = [
     {id: 1, name:'moe', slot: 'first'},
     {id: 2, name:'larry', slot: 'second'},
     {id: 3, name:'curly', slot: 'third'},
     {id: 4, name:'lucy', slot: 'third', selected: true},
];

const firstBox = document.getElementById("first");
const secondBox = document.getElementById("second");
const thirdBox = document.getElementById("third");
for(let i = 0; i < users.length; i++){
     let currentUser = users[i];

     if(currentUser.id === 1){
          const node = document.createElement("p");
          const textNode = document.createTextNode(currentUser.name);
          node.appendChild(textNode);
          firstBox.appendChild(node);
     }
     else if(currentUser.id === 2){
          const node = document.createElement("p");
          const textNode = document.createTextNode(currentUser.name);
          node.appendChild(textNode);
          secondBox.appendChild(node);
     }
     else{
          const node = document.createElement("p");
          const textNode = document.createTextNode(currentUser.name);
          node.appendChild(textNode);
          thirdBox.appendChild(node);
     }
}

const list = document.getElementById('list');

list.addEventListener('click', (e) => {
     const target = e.target;
     //console.log(target);
     const tagName = e.target.tagName;
     //console.log(tagName);
     //console.log(target.className);
     if(tagName === 'P' && !target.className){
          target.className = 'magenta';
     }
     else if (target.tagName = 'magenta' && (target.className !== 'colored' && target.className !== 'default' ) ){
          target.className = '';
     }


     const firstDiv = document.getElementById("first");
     const allPsInFirst = firstDiv.querySelectorAll("p");
     for(let i = 0; i < allPsInFirst.length; i++){
          let currentP = allPsInFirst[i];
          if(currentP.className === 'magenta' && target.id === 'div1'){
                   const adoptedNode = document.adoptNode(currentP);
                   secondBox.appendChild(adoptedNode);    
          }
     }

     const secondDiv = document.getElementById("second");
     const allPsInSecond = secondDiv.querySelectorAll("p");
     for(let i = 0; i < allPsInSecond.length; i++){
          let currentP = allPsInSecond[i];
          if(currentP.className === 'magenta' && target.id === 'move-left') {
               const adoptedNode = document.adoptNode(currentP);
               firstBox.appendChild(adoptedNode);    
          }
          else if(currentP.className === 'magenta' && target.id === 'move-right'){
               const adoptedNode = document.adoptNode(currentP);
               thirdBox.appendChild(adoptedNode);
          }
     }

      const thirdDiv = document.getElementById("third");
      const allPsInThird = thirdDiv.querySelectorAll("p");
      for(let i = 0; i < allPsInThird.length; i++){
           let currentP = allPsInThird[i];
           if(currentP.className === 'magenta' && target.id === 'button3'){
                    const adoptedNode = document.adoptNode(currentP);
                    secondBox.appendChild(adoptedNode);    
           }
      }
      



} )













