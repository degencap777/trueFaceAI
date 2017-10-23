class TruefaceMatch extends HTMLElement {

	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = this.template;

		this.width = 640;
		this.height = 480;
		this.streaming = false;

		this.video = shadowRoot.querySelector('video');
		this.canvas = shadowRoot.querySelector('canvas');
		this.button = shadowRoot.querySelector('button');

		navigator.mediaDevices.getUserMedia({ video: true, audio: false })
			.then(stream => {
				this.video.srcObject = stream;
				this.video.play();
			})
			.catch(err => console.log("An error occured! " + err));

		this.video.addEventListener('canplay', event => {
			if (!this.streaming) {
				this.height = this.video.videoHeight / (this.video.videoWidth / this.width);

				this.video.setAttribute('width', this.width);
				this.video.setAttribute('height', this.height);
				this.canvas.setAttribute('width', this.width);
				this.canvas.setAttribute('height', this.height);
				this.streaming = true;
			}
		}, false);

		this.button.addEventListener('click', () => {
			const context = this.canvas.getContext('2d');
			context.drawImage(this.video, 0, 0, this.width, this.height);
			const data = this.canvas.toDataURL('image/jpeg');
			const photo = data.replace("data:image/jpeg;base64,", "");
			const event = new CustomEvent('photoTaken', { detail: { photo: photo }});
			this.dispatchEvent(event);
		}, false);
	}

	get template() {
		return `<style>
	:host {
		position: relative;
    		max-width: 640px;
	}
	:host canvas {
    		display: none;
	}
	:host .center {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
	:host video {
	    display: block;
	    width: 640px;
	    height: 480px;
	    object-fit: cover;
	}
	:host button {
	    padding: 8px;
	    margin: 8px;
	}
	</style>
	<video>Video stream not available.</video>
	<section class="center">
		<button>Take photos</button>
        </section>
        <canvas></canvas>`;
	}
}

window.customElements.define('trueface-match', TruefaceMatch);
