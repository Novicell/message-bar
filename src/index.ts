// Extend the LitElement base class
import {LitElement, html, css, customElement, property} from "lit-element";
import {styleMap} from 'lit-html/directives/style-map.js';

import { getCookie, setCookie} from "./util";

@customElement('message-bar')
class MessageBar extends LitElement {

    isHidden = false;

    @property({
        attribute: 'background-color'
    })
    backgroundColor = '#FF8387';

    @property({
        attribute: 'color'
    })
    textColor = '#FFF';

    @property()
    position = 'top';

    @property()
    message = 'This is your message.';

    @property({
        attribute: 'button-text'
    })
    btnText = 'Read more';

    @property({
        attribute: 'href'
    })
    btnLink = '';

    @property({
        attribute: 'target'
    })
    target = '_self';

    firstUpdated() {
        const oldCookie = getCookie('message-bar-closed');

        if (oldCookie) this.isHidden = true; this.requestUpdate();
    }

    getWrapperStyles() {
        return { backgroundColor: this.backgroundColor, color: this.textColor, top: this.position === 'top' ? '0' : 'auto', bottom: this.position === 'bottom' ? '0' : 'auto' }
    }

    getButtonStyles() {
        return { color: this.textColor, borderColor: this.textColor }
    }

    closeBar() {
        this.isHidden = true;
        setCookie('message-bar-closed', 'closed');
        this.requestUpdate()
    }



    static get styles() {
        return css`
          * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: Arial;
          } 
          
          .message-wrapper.hide {
            display: none;
          }
          
          .message-wrapper {
            position: fixed;
            left: 0;
            width: 100%;
            padding: 20px 45px;
            display: flex;
          }
          
          .message-wrapper__inner {
              margin: 0 auto;
              font-size: 18px;
              display: flex;
              align-items: center;
          }
          
          .read-more {
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 4px;
            border: 1px solid;
            margin-left: 15px;
            display: inline-block;      
            flex-grow: 0;
            flex-shrink: 0;      
          }
          
          .message-bar-close {
            position: absolute;
            top: 20px;
            right: 15px;
            font-size: 32px;
            cursor: pointer;
          }
          
          
        `;
    }

    render(){
        return html`
            <div class="message-wrapper ${this.isHidden ? 'hide' : ''}" style=${styleMap(this.getWrapperStyles())}>
                <div class="message-bar-close" @click="${this.closeBar}">X</div>
                <div class="message-wrapper__inner">
                    ${this.message}
                    ${this.btnLink !== '' ? html`<a href=${this.btnLink} target=${this.target} class="read-more" style=${styleMap(this.getButtonStyles())}>${this.btnText}</a>` : null}
                </div>
            </div>
      <!-- template content -->
      
    `;
    }
}

