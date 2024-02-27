customElements.define("my-header", class MyHeader extends HTMLElement {
    static observedAttributes = ["path"];

    constructor() {
        // Always call super first in constructor
        super();
		
        // Create a shadow root
        const shadow = this.attachShadow({
            mode: "open"
        });
		
        const header = document.createElement("header");

        header.innerHTML = `
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/spa">Spa</a></li>
			</ul>
		`;

        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");

        shadow.appendChild(style);
        shadow.appendChild(header);
    }

    connectedCallback() {
        //console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        //console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        //console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //console.log(`Attribute ${name} has changed.`);
		
		this.shadowRoot.querySelector("style").textContent = `
			header {
				text-align: center;
				padding: 10px;
				box-shadow: 0 0 10px 1px black;
			}

			ul, li {
				display: inline;
				padding: 10px;
			}

			a {
				color: black;
				text-decoration: none;
			}
			
			a:hover {
				color: red;
			}

			a[href$="${newValue}"] {
				color: red;
				text-decoration: underline;
				pointer-events: none;
				cursor: default;
			}
		`;
    }
});
