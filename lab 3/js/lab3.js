//https://webcrunch.com/posts/how-to-create-tabs-with-vanilla-javascript? 
//https://www.slingacademy.com/article/building-a-simple-tabs-interface-using-only-the-javascript-dom/?
const tabs = document.querySelectorAll('[role="tab"]');

const panels = document.querySelectorAll('[role="tabpanel"]');

function showPanel(id) {

    panels.forEach(panel => {
        panel.classList.remove("active");
    });

    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    document.querySelector(id).classList.add("active");
}

tabs.forEach(tab => {

    tab.addEventListener("click", function(e) {
        e.preventDefault();

    
        const panelId = this.querySelector("a").getAttribute("href");

        showPanel(panelId);

        this.classList.add("active");
    });

});


showPanel("#tabpanel1");
tabs[0].classList.add("active");