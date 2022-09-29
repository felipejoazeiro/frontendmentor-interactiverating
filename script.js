$(document).ready(function(){
    $(".rating-options").click(function(){
        $(".rating-options").removeClass("buttonClicked");
        $(this).addClass("buttonClicked");
    });
});

const submitButton = $('#submit-button');
const submitSection = $('#submitSection');
const thxSection = $('#thxSection')

const rating = document.querySelectorAll('.rating-options')
const result = document.querySelector('#review-value')


console.log(result)
submitButton.click(()=>{
    submitSection.addClass('hidden')
    thxSection.removeClass('hidden')
})

rating.forEach((e)=>{
    e.addEventListener('click',()=>{    
        result.textContent = e.textContent
    })
})

