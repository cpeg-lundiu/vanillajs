customElements.define("about-vmv", class AboutVmv extends HTMLElement {
    static observedAttributes = ["data"];

    constructor() {
        // Always call super first in constructor
        super();
		
        // Create a shadow root
        const shadow = this.attachShadow({
            mode: "open"
        });
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
		
		this.shadowRoot.innerHTML = '';
		
        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
		
		style.textContent = `
			article {
				background-color: silver;
			}
		`;

        this.shadowRoot.appendChild(style);
		
		JSON.parse(newValue).forEach((item) => {
			const ele = document.createElement("div");
			
			ele.innerHTML = `
				<h3>${item.subject}</h3>
				<article>${item.content}</article>
			`;
			
			this.shadowRoot.appendChild(ele);
		});
    }
});
