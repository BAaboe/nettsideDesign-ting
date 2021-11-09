function searchgBtnClick(){
    let input = document.getElementById("input").value;
    console.log(input)
    window.location.replace(`https://www.google.com/search?q=tea, ${input}`);
}
