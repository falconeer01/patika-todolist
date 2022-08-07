const newElement = () =>{
    let task = document.querySelector("#task");
    let list = document.querySelector("#list");
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${task.value}`;
    SaveLocalStorage(liDOM.innerHTML);
    if(liDOM.innerHTML.length>0 && (liDOM.innerHTML.trim())){
        list.appendChild(liDOM);
        liDOM.addEventListener("click", yapıldı = () =>{
            liDOM.classList.toggle("checked");
        })
        task.value = "";
        $('.success').toast('show');
    }
    else{
        $('.error').toast('show');
    }

    let nodeList = document.getElementsByTagName("li");
    for(let i=0; i<nodeList.length; i++){
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7")
        span.className = "close";
        span.appendChild(txt);
        nodeList[i].appendChild(span);
    }

    let close = document.getElementsByClassName("close");
    for(let i=0; i<close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
            DeleteLocalStorage(div.innerHTML)
        }
    }
}

function SaveLocalStorage(item){
    let items;
    if(localStorage.getItem('listItem') == null){
        items = []
    }else{
        items = JSON.parse(localStorage.getItem('listItem'))
    }

    items.push(item);
    localStorage.setItem('listItem',JSON.stringify(items))
}

function DeleteLocalStorage(item){
    let items;
    if(localStorage.getItem('listItem') == null){
        items = []
    }else{
        items = JSON.parse(localStorage.getItem('listItem'))
    }
    items.splice(items.indexOf(item),1)

    localStorage.setItem('listItem', JSON.stringify(items))
}