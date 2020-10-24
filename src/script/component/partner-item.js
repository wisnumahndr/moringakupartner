class PartnerItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set partner(partner) {
        this._partner = partner
        this.render();

    }

    render(){
    this.shadowDOM.innerHTML =`
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .fan-art-partner {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .partner-info {
            padding: 24px;
        }
        
        .partner-info > h2 {
            font-weight: lighter;
        }
        
        .partner-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
    </style>
    <img class="fan-art-partner" src="${this._partner.title}" alt="Partner Art">
        <div class="partner-info">
            <h2>${this._partner.PartnerName}</h2>
            <p>${this._partner.content}</p>
            </div>
        `;
    }
}

customElements.define("partner-item", PartnerItem);