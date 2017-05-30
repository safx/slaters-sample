import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        root
    );
};

render(App)

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    })
}
