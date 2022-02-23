let QueueContainer = document.querySelector('.queue-container');
let TextInput = document.querySelector('#item-input');

function AddRecord() {
    // check if text is not empty
    if(TextInput.value !== '') {
        let queueItem = document.createElement('p');
        queueItem.setAttribute('class','queue-item');
        queueItem.innerText = TextInput.value;
        // add item 
        document.querySelector('.queue-container').prepend(queueItem);
        TextInput.value = '';
    }
}
function RemoveRecord(btn) {
    // disable button 
    btn.disabled = true 
    // select last item
    let childToRemove = QueueContainer.children[QueueContainer.children.length-1];
    // if Queue is not empty 
    if(childToRemove) {
        // animate the last item for 1s
        childToRemove.animate([
            { transform: 'translateX(0px)' },
            { transform: 'translateX(200px)' }
        ],{
            duration: 1000,
            iterations: Infinity
        })
        // remove item after 800ms
        setTimeout(() => {
            childToRemove.remove(); 
            btn.disabled = false;
        },800);
    }
}