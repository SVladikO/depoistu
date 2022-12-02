import {Counter} from "../../features/counter/Counter";
import React from "react";

function ReduxIntroductionPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <span>
          <span>Learn </span>
          <a
              className="App-link"
              href="src/page/development/Redux-introduction.page"
              target="_blank"
              rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
              className="App-link"
              href="src/page/development/Redux-introduction.page"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
              className="App-link"
              href="src/page/development/Redux-introduction.page"
              target="_blank"
              rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
              className="App-link"
              href="src/page/development/Redux-introduction.page"
              target="_blank"
              rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
            </header>
        </div>
    )
}

export default ReduxIntroductionPage;