import logo from '../../img/logo.png';
class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
            :host {
                display: block;
                padding: 16px;
                background-color: #33b44a;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
                width: 85%;
                max-width: 800px;
                margin-left: 20%;
            }
            
            :host h2{
                display: inline;
                font-size: 30px;
                // padding: 16px;
            }   
            :host .logo {
                width: 100%;
                max-width: 200px;
                object-fit: cover;
                object-position: center;
                float: left;
                display: block;
                height: 66px;
                margin-top: -15px;
            }
            @media screen and (max-width: 1303px) {
                :host {
                    margin: auto;
                }
            }
            @media (min-width: 340px) and (max-width: 412px)
            {
                :host .logo {
                    object-fit: cover;
                    width: 56%;
                    height: 51px;
                    padding-top: 2px; 
                    
                }
                :host h2 {
                    font-size: 20px;
                    padding-left: 5px;
                }
            }
        </style>
            <img src="${logo}" class="logo">
            <h2>Partner</h2>
        `;
        
    }
}

customElements.define("app-bar", AppBar);