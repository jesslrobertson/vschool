const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true );
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        console.log(data.objects[0].pokemon);
        showData(data.objects[0].pokemon);
    } else if (xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}

function showData(arr){
    for ( i = 0; i < arr.length; i++) {
        let text = document.createElement("p");
        text.textContent = arr[i].name;
        document.body.appendChild(text);

    }
}