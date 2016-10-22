class EduiNameCard extends HTMLElement {
  set user(name) {
    this._name = name;
    
    this.render();
  }

  get user() {
    return this._name || {};
  }

  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  constructor() {
    super();

    this.addEventListener('click', e => {
      const tag = e.target.tagName;

      if(tag === 'BUTTON') {
        const cardEvent = new CustomEvent('greet', {
          detail: this.user
        });
        
        this.dispatchEvent(cardEvent);
      }
    })
  }

  foo() {
    alert('test');
  }

  render() {
    this.innerHTML = `
      <section class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Welcome to Eduiconf!</h2>
        </div>

        <div class="mdl-card__supporting-text">
          Hello, my name is <b>${this.fullName}</b>, <br>

          and I work at <b>${this.user.company}</b>
        </div>

        <div class="mdl-card__actions">
          <button class="mdl-button  mdl-button--raised mdl-button--colored">
            Say Hi!
          </button>
        </div>
      </section>
    `
  }
}

window.customElements.define('edui-name-card', EduiNameCard);