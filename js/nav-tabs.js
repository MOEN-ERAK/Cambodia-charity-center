function togglePlaceholder() {
    const placeholder =document.getElementById("placeholder-wrapper");

    if (placeholder) {
        placeholder.classList.toggle('active');
    }
}

document.getElementById('custom-nav-tabs').querySelectorAll('button').forEach(element => {
    element.addEventListener('click', function toggleTabContent(e) {
        document.getElementById('custom-nav-tabs').querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });

        e.target.classList.add('active');
        const activeTabId = e.target.getAttribute('id');

        document.querySelectorAll('.custom-tab-content').forEach(content => {
            content.classList.remove('active');
            if (content.getAttribute('id') === activeTabId) {
                togglePlaceholder();

                setTimeout(() => {
                    togglePlaceholder();
                    content.classList.add('active');
                }, 1000);
            }
        });
    });
});