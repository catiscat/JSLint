import React, { Component } from 'react';
import * as acorn from 'acorn';
import transform from '../utils/transform';

class CodeContainer extends Component {

  getAst() {
    const code = `
      class Page extends Component{
        get = ()=>{}
      }
    `;
    const es5code = transform(code);
    const ast = acorn.parse(es5code);
    console.log(es5code, ast);
  }
  render() {
    this.getAst();
    return (
      <div>
        <h1>CodeContainer Page</h1>
      </div>
    );
  }
}

export default CodeContainer;
