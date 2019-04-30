/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { LitElement, html, CSSResultArray } from 'lit-element';
import './side-nav';
import './spectrum-logo';
import styles from './header.css';
import { toCssTemplateString } from '../utils/templates';

class Header extends LitElement {
    public static get styles(): CSSResultArray {
        return [toCssTemplateString(styles)];
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <nav className="header">
                <spectrum-heading variant="pageTitle">
                    <docs-spectrum-logo slot="image"></docs-spectrum-logo>
                    Spectrum Web Components
                </spectrum-heading>
            </nav>
        `;
    }
}
customElements.define('docs-header', Header);
