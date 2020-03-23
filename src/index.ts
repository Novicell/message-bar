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
    fixed = 'true';

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
        return { backgroundColor: this.backgroundColor, position: this.fixed === 'true' ? 'fixed' : 'relative', color: this.textColor, top: this.position === 'top' ? '0' : 'auto', bottom: this.position === 'bottom' ? '0' : 'auto' }
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
            z-index: 999;
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
            top: 14px;
            right: 15px;
            font-size: 32px;
            cursor: pointer;
            line-height: 1;
          }
          
          @media (max-width: 769px) {
            .message-wrapper__inner {
              flex-direction: column;
              align-items: flex-start;
            }
            
            .read-more {
              margin-top: 5px;
              margin-left: 0;
            }
          }
          
          
        `;
    }

    render(){
        return html`
            <div class="message-wrapper ${this.isHidden ? 'hide' : ''}" style=${styleMap(this.getWrapperStyles())}>
                <div class="message-bar-close" @click="${this.closeBar}">&times;</div>
                <div class="message-wrapper__inner">
                    ${this.message}
                    ${this.btnLink !== '' ? html`<a href=${this.btnLink} target=${this.target} class="read-more" style=${styleMap(this.getButtonStyles())}>${this.btnText}</a>` : null}
                </div>
            </div>
      <!-- template content -->
      
    `;
    }
}

