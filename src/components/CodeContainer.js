import React, { Component } from 'react';
import * as acorn from 'acorn';

class CodeContainer extends Component {

  getAst() {
    const code = `
      const a = 1;
      const b = a;
    `;
    const ast = acorn && acorn.parse(code);
    console.log(ast);
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
