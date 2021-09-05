import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App';

const CustomElement = wrap(Vue, App);

window.customElements.define('vue-hello-wolrdyarn ', CustomElement);