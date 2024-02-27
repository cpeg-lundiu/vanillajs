customElements.define("form-contact", class FormContact extends HTMLElement {
    static observedAttributes = ["action"];

    constructor() {
        // Always call super first in constructor
        super();
		
        // Create a shadow root
        const shadow = this.attachShadow({
            mode: "open"
        });
		
        const frm = document.createElement("form");
		
		frm.method = "POST";

        frm.innerHTML = `
			<div>
				<label for="name">Name : </label>
				<input id="name" type="text" />
			</div>
			<div>
				<label for="email">Email : </label>
				<input id="email" type="email" />
			</div>
			<label for="message">Message: </label>
			<textarea id="message" rows="5"></textarea>
			<input type="submit" value="Submit" />
		`;
		
        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
		
		style.textContent = `
			form {
				display: flex;
				flex-direction: column;
				margin: 20px 0 0 0;
			}

			form > * {
				margin: 5px;
			}

			textarea {
				resize: none;
			}

			input {
				align-self: flex-end;
			}
		`;

        shadow.appendChild(style);
        shadow.appendChild(frm);
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
		
		this.shadowRoot.querySelector("form").action = newValue;
    }
});
