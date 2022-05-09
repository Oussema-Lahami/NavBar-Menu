const list = document.querySelectorAll('.list') ;

function activeLink() {
    list.forEach((item) => 
    this.classList.add('active'));
}

function nonactiveLink() {
    list.forEach((item) => 
    this.classList.remove('active'));
}


list.forEach((item) => 
item.addEventListener('mouseover' , activeLink));

list.forEach((item) => 
item.addEventListener('mouseout' , nonactiveLink));