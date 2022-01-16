const MainMenu = () => {
    const offCanvasMobile = document.querySelector('.offcanvas-menu-mobile');


    const mobileMenu = () => {
        const handleSubMenu = (el: Element) => {
            el.addEventListener('click', (e) => {
                if (e.target !== e.currentTarget) return;
                const dataMenuTo = el.getAttribute('data-menu-to');
                offCanvasMobile?.querySelector(`[data-menu="${dataMenuTo}"]`)?.classList.toggle('d-none');
                document.querySelectorAll('.menu-entry').forEach((el) => el.classList.add('d-none'));
                document.querySelector('body')?.classList.add('mobile-menu-is-open');
            })
        }

        const changeTitle = (title: string) => {
            ((<HTMLElement>offCanvasMobile?.querySelector('.mobile-menu-title')).innerText = title);
        }

        const backToMenu = () => {
            offCanvasMobile?.querySelectorAll('.menu-entry').forEach((el) => el.classList.remove('d-none'));
            offCanvasMobile?.querySelector('[data-menu]')?.classList.add('d-none');
            changeTitle('MENU');
            document.querySelector('body')?.classList.remove('mobile-menu-is-open');
        }

        offCanvasMobile?.querySelector('.back-menu-mobile')?.addEventListener('click', backToMenu);
        offCanvasMobile?.querySelectorAll('[data-menu-to]').forEach(handleSubMenu);
    }

    const init = () => {
        mobileMenu();
    }


    init();
}





MainMenu();

export default {}