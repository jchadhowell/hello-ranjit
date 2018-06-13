
class HelloRanjit extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "Hello, Ranjit!";
  }
}
customElements.define("hello-ranjit", HelloRanjit);
