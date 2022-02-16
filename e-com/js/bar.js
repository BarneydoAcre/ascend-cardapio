const slideValue = document.querySelector("#span");
        const inputSlider = document.querySelector("#input");
        inputSlider.oninput = (()=>{
            let value = inputSlider.value;
            slideValue.textContent = value + "R$";
            slideValue.style.left = (value/4.2) + "%";
            slideValue.classList.add("show");
        });
        inputSlider.onblur = (()=>{
            slideValue.classList.remove("show");
        });