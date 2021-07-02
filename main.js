const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => tab.addEventListener('click', selectTab));

function selectTab(e) {

    removeBorder();

    this.classList.add('show-tab');

}


function removeBorder(){

    tabs.forEach(tab => tab.classList.remove("show-tab"));
}