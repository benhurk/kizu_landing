function scrollToTop() {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}

function contentTabHide() {
    const pageTab = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < pageTab.length; i++) {
        pageTab[i].classList.remove("active");
    }

    const navItem = document.querySelectorAll('[data-nav-link]');
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove("active");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.querySelectorAll('.p-inner__pagination a');
    const nextBtn = document.querySelector('.p-inner__pagination-next');
    const prevBtn = document.querySelector('.p-inner__pagination-prev');

    for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].addEventListener('click', function(e) {
            const el = e.target;
            let targetTab;

            //TAB NUM
            if (el.classList.contains("p-inner__pagination-link")) {
                targetTab = document.querySelector(`[data-tab-id="${el.dataset.navLink}"]`);
                contentTabHide();
                el.classList.add("active");
            }

            //TAB NEXT
            if (el.classList.contains("p-inner__pagination-next")) {
                const currentTab = document.querySelector('[data-tab-id].active');
                const targetNavItem = document.querySelector(`[data-nav-link="${parseInt(currentTab.dataset.tabId) + 1}"]`);

                targetTab = document.querySelector(`[data-tab-id="${parseInt(currentTab.dataset.tabId) + 1}"]`);

                contentTabHide();
                targetNavItem.classList.add("active");
            }

            //TAB PREVIOUS
            if (el.classList.contains("p-inner__pagination-prev")) {
                const currentTab = document.querySelector('[data-tab-id].active');
                const targetNavItem = document.querySelector(`[data-nav-link="${parseInt(currentTab.dataset.tabId) - 1}"]`);
                
                targetTab = document.querySelector(`[data-tab-id="${parseInt(currentTab.dataset.tabId) - 1}"]`);

                contentTabHide();
                targetNavItem.classList.add("active");
            }

            scrollToTop();
            targetTab.classList.add("active");

            if (parseInt(targetTab.dataset.tabId) == 3) {
                nextBtn.style.display = "none";
            } else {
                nextBtn.style.display = "block";
            }

            if (parseInt(targetTab.dataset.tabId) == 1) {
                prevBtn.style.display = "none";
            } else {
                prevBtn.style.display = "block";
            }

            console.log(targetTab.dataset.tabId);
        })
    }
})