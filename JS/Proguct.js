    document.addEventListener('click', function (event) {
        
        const clickedSubImg = event.target.closest('.product-sub-img img');
        
        if (clickedSubImg) {
            const container = clickedSubImg.closest('.product-container');
            const mainImg = container.querySelector('.product-img > img');
            
            if (mainImg) {
                mainImg.src = clickedSubImg.src;
                
                const allSubs = container.querySelectorAll('.product-sub-img img');
                allSubs.forEach(img => img.style.opacity = '1');
                clickedSubImg.style.opacity = '0.6';
            }
        }
    });

    const quantityInputs = document.querySelectorAll('input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('input', function() {
            const min = parseInt(this.getAttribute('min'));
            if (this.value !== "" && this.value < min) {
                this.value = min;
            }
        });
    });