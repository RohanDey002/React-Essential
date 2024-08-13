import reactlogo from './assets/react.svg';
import angularlogo from './assets/angularJs.svg';
import vuelogo from './assets/vueJs.svg';

export const Core_Concept = [
    {
        image: reactlogo,
        title: 'React Js',
        description: 'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.'
    },
    {
        image: angularlogo,
        title: 'Angular Js',
        description: 'Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications.'
    },
    {
        image: vuelogo,
        title: 'Vue Js',
        description: 'Vue.js directives offers functionality to HTML applications. Vue.js provides built-in directives and user defined directives.'
    }
];

export const DETAILS = {
    react: {
        history: 'The story of React.js begins in 2013.',
        dom: 'React maintains virtual DOM',
        code: `
     function HelloWorld() { 
         return <h1>Hello, world!</h1>; 
         }`,
    },
    angular: {
        history: 'Angular was first released in 2010.',
        dom: 'Angular use real DOM',
        code: `
    import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '
            < h1 > Hello World</h1>;
   ' })
export class AppComponent {

} 
        }`,
    },
    vue: {
        history: 'Vue was inveted in 2014.',
        dom: 'Vue Js also based on virtual DOM',
        code: `
   var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, world!'
  }
})`,
    }


};