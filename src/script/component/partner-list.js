import './partner-item.js';

class PartnerList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set partners(partners) {
        this._partners = partners;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._partners.forEach(partner => {
            const partnerItemElement = document.createElement("partner-item");
            partnerItemElement.partner = partner
            this.shadowDOM.appendChild(partnerItemElement);
        })
    }
}

customElements.define("partner-list", PartnerList);