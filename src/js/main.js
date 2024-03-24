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

function paginationNav() {
    const navBtn = document.querySelectorAll('.p-inner__pagination a');
    const nextBtn = document.querySelector('.p-inner__pagination-next');
    const prevBtn = document.querySelector('.p-inner__pagination-prev');

    for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].addEventListener('click', function(e) {
            const el = e.target;
            let targetTab;

            //Tab numbers buttons
            if (el.classList.contains("p-inner__pagination-link")) {
                targetTab = document.querySelector(`[data-tab-id="${el.dataset.navLink}"]`);
                contentTabHide();
                el.classList.add("active");
            }

            //Next tab button
            if (el.classList.contains("p-inner__pagination-next")) {
                const currentTab = document.querySelector('[data-tab-id].active');
                const targetNavItem = document.querySelector(`[data-nav-link="${parseInt(currentTab.dataset.tabId) + 1}"]`);

                targetTab = document.querySelector(`[data-tab-id="${parseInt(currentTab.dataset.tabId) + 1}"]`);

                contentTabHide();
                targetNavItem.classList.add("active");
            }

            //Previous tab button
            if (el.classList.contains("p-inner__pagination-prev")) {
                const currentTab = document.querySelector('[data-tab-id].active');
                const targetNavItem = document.querySelector(`[data-nav-link="${parseInt(currentTab.dataset.tabId) - 1}"]`);
                
                targetTab = document.querySelector(`[data-tab-id="${parseInt(currentTab.dataset.tabId) - 1}"]`);

                contentTabHide();
                targetNavItem.classList.add("active");
            }

            //
            scrollToTop();
            targetTab.classList.add("active");

            //Toggle next and prev buttons
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
        })
    }
}

document.addEventListener('DOMContentLoaded', function() {
    paginationNav();
})