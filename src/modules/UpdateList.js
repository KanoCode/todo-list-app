console.log('updated list')

const input = document.getElementById('add-to-List');

// add to local storage 
const list = []

console.log(input)

const addItem = ()=>{
    if(input.value !== ""){
        let obj = {
            description:input.value,
            completed:false,
            index: list.length === 0 ? 0 : list.length, 
        }
        list.push(obj)
        localStorage.setItem("activityArr",JSON.stringify(list));
        input.value = ""
        console.log(list)
    }
}
input.addEventListener('keypress',(e)=>{
    if(e.key ==="Enter"){
        addItem()
    }
})