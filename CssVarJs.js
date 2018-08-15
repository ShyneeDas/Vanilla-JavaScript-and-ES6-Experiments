
var trying=document.querySelector(".controls");
console.log(trying);
var inputs=trying.querySelectorAll("input");
console.log(inputs);
function handleUpdate(){
    const suffix= this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));