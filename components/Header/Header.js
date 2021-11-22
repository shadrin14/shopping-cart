class Header {
    
    render() {
        const html = `
            <div class="header-container">
                <div class="header-counter">
                🛒 10
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
headerPage.render();