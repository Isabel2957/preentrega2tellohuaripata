const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated  = false;

window.addEventListener("scroll", () =>{
    if(scrollY > container.offsetTop - container.offsetHeight - 240 && activated === false){
        counters.forEach(counter => {
            counter.innerText = 0;
            let count  = 0;
            function updateCount(){
                const target= parseInt(counter.dataset.count);
                if(count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();

            activated = true;
        })
    } else if(scrollY < container.offsetTop - container.offsetHeight - 400 || pageYOffset === 0 && activated ===true){
            counters.forEach(counter => {
            counter.innerText  = 0;
        });
        activated  =false;
    }
});