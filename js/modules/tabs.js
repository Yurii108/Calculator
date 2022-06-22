function tabs() {
    const tabs = document.querySelectorAll('.tabheader_item'),
        tabsContent = document.querySelectorAll('.content'),
        tabsParent = document.querySelector('.tabheader_items');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader_items_active');
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader_items_active');

    }

    hideTabsContent();
    showTabsContent();


    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader_item')) {
            tabs.forEach((item, i) => {
                if (item === target) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

export default tabs;