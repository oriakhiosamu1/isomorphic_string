const stringOne=document.getElementById('string1');
const stringTwo=document.getElementById('string2');
const submitBtn = document.getElementById('submit');
const resultEl= document.getElementById('result');


submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  const one = stringOne.value
  const two = stringTwo.value;

  isomorphic(one, two);

  stringOne.value='';
  stringTwo.value='';

})



function isomorphic(s, t){
    if(s.length !== t.length){
      // return false;
      return resultEl.textContent = 'words must be of same length';
    }
    
    const mapA= new Map();
    const mapB= new Map();
    
    for(let i=0; i < s.length; i++){
      if(mapA.has(s[i])){
        if(mapA.get(s[i]) !== t[i]){
          // return false;
          return resultEl.textContent= 'false, words are not isomorphic';
        }
      }else{
        mapA.set(s[i], t[i])
      }
      
      if(mapB.has(t[i])){
        if(mapB.get(t[i]) !== s[i]){
          // return false;
          return resultEl.textContent= 'false, words are not isomorphic';
        }
      }else{
        mapB.set(t[i], s[i]);
      }
    }
    
    // return true;
    return resultEl.textContent= 'true, words are Isomorphic';
    
  }
  
