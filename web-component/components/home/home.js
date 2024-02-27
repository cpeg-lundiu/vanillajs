customElements.define("my-home", class MyHome extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
		
        // Create a shadow root
        const shadow = this.attachShadow({
            mode: "open"
        });
		
        const canvas = document.createElement("canvas");
		
		canvas.width = 400;
		canvas.height = 400;

        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
		
		style.textContent = `
			canvas {
				background-color: #75b7e3;
				padding: 10px;
			}
		`;

        shadow.appendChild(style);
        shadow.appendChild(canvas);
    }

    connectedCallback() {
        //console.log("Custom element added to page.");
		
		const animateHome = (ctx) => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			setTimeout(() => {
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(200, 1);
				ctx.lineTo(400, 150);
				ctx.lineTo(0, 150);
				ctx.closePath();
				ctx.fillStyle = "brown";
				ctx.fill();
				ctx.strokeStyle = "black";
				ctx.stroke();
			}, 500);
			
			setTimeout(() => {
				ctx.fillStyle = "#f6e204";
				ctx.fillRect(20, 150, 360, 249);
				ctx.strokeStyle = "black";
				ctx.strokeRect(20, 150, 360, 249);
			}, 1000);
			
			setTimeout(() => {
				ctx.fillStyle = "white";
				ctx.fillRect(50, 180, 80, 80);
				ctx.strokeStyle = "black";
				ctx.strokeRect(50, 180, 80, 80);
				
				ctx.beginPath();
				ctx.moveTo(90, 180);
				ctx.lineTo(90, 260);
				ctx.moveTo(50, 220);
				ctx.lineTo(130, 220);
				ctx.closePath();
				ctx.stroke();
			}, 1500);
				
			setTimeout(() => {
				ctx.fillStyle = "white";
				ctx.fillRect(270, 180, 80, 80);
				ctx.strokeStyle = "black";
				ctx.strokeRect(270, 180, 80, 80);
				
				ctx.beginPath();
				ctx.moveTo(310, 180);
				ctx.lineTo(310, 260);
				ctx.moveTo(270, 220);
				ctx.lineTo(350, 220);
				ctx.closePath();
				ctx.stroke();
			}, 2000);
			
			setTimeout(() => {
				ctx.fillStyle = "brown";
				ctx.fillRect(160, 300, 80, 99);
				ctx.strokeStyle = "black";
				ctx.strokeRect(160, 300, 80, 99);
			}, 2500);
			
			setTimeout(() => {
				ctx.beginPath();
				ctx.arc(170, 350, 5, 0, 2 * Math.PI);
				ctx.fillStyle = "black";
				ctx.fill();
			}, 3000);
		};
		
		const canvas = this.shadowRoot.querySelector("canvas");
		const ctx = canvas.getContext("2d");
		
		animateHome(ctx);

		setInterval(() => {
			animateHome(ctx);
		}, 4000);
    }

    disconnectedCallback() {
        //console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        //console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //console.log(`Attribute ${name} has changed.`);
    }
});
