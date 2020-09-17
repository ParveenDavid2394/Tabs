// get target elements
const buttons = document.querySelectorAll('.tab-btn');
const articleContainer = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

articleContainer.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
        // remove the 'active' class from all the buttons first
        buttons.forEach( (btn) =>{
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        // hide articles other than the one that was clicked
        articles.forEach( (article) => {
            article.classList.remove('active');
            if(article.id === id){
                article.classList.add('active');
            }
        })
    }
});