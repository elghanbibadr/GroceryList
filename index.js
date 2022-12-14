

let form =document.querySelector('form');
let message=document.querySelector('.message');
let clearItemsBtn=document.querySelector('.clear-items');
let input=document.querySelector('input[type=text]');
let groceryList=document.querySelector('.groceryList');
let submitBtn=form.querySelector('input[type=submit]');
let deleteItemIcon=document.querySelector('.deleteItemIcon');
let editFlag=false;
let editItemName,editedItem;


const submitForm=(e)=>{
  e.preventDefault();
  if (!input.value){
      showMessage('Please Enter Value','red');
       return
  };
  if(!editFlag){
      addItem();
      clearItemsBtn.classList.remove('hidden');
  }
  else{
    editedItem.textContent=input.value;
    clearInput();
    showMessage('Value Changed','green');
    editFlag=false;
    changeSubmitBtnValue();
   }
}

const changeSubmitBtnValue=()=> editFlag ? submitBtn.value='Edit': submitBtn.value='Submit';

const clearInput=()=>input.value='';

const addItem=()=>{
let newItem=document.createElement('li');
newItem.classList.add('.groceryList__items');
newItem.innerHTML=`
    <div class="addedItemBox">
    <h3 class="addedItemName">${input.value}</h3>
    <div class="icons">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="editItemIcon"  fill='green' d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
        <svg class="deleteItemIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path class="deleteItemIcon" fill='red' d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    </div>
    </div>
`
groceryList.append(newItem);
clearInput();
showMessage('Item Added  To The List','green');
}


const deleteItem=(e)=>{
    e.target.parentElement.parentElement.parentElement.remove();
    showMessage('Item Removed','red');
    clearInput();
  }
 

const editItem=(e)=>{
  editFlag=true;
  changeSubmitBtnValue();
  editedItem=e.target.parentElement.parentElement.previousElementSibling;
  editItemName=e.target.parentElement.parentElement.previousElementSibling.textContent;
 input.value=editItemName;
}

const clearItems=()=>{
  groceryList.innerHTML='';
  showMessage('Empty List','red');
  clearInput();
  clearItemsBtn.classList.add('hidden');
}

const showMessage=(Messagecontent,color)=>{
    message.classList.value="message";
    message.style.display='block';
   message.textContent=Messagecontent;
   message.classList.add(color);
   setTimeout(()=>message.style.display='none',1000)
}


const updateGroceryListItem=(e)=>{
if (e.target.className.baseVal=='deleteItemIcon') deleteItem(e);
if (e.target.className.baseVal=="editItemIcon") editItem(e); 
}



// Event Listener
form.addEventListener('submit',submitForm);
clearItemsBtn.addEventListener('click',clearItems);
groceryList.addEventListener('click',updateGroceryListItem);

