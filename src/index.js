import React from 'react';
import { Provider } from "react-redux"; // 1.
import { store } from './component/redux/store';
import { createRoot } from 'react-dom/client';
import App from "./app"
const domNode = document.getElementById('root');
const root = createRoot(domNode);
function Index() {

    return (

        <Provider store={store}>  { /* 將store作為props傳遞給其他component */}
            <App />
        </Provider>

    )
}
root.render(<Index />);