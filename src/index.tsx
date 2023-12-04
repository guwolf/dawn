import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode as HTMLDivElement);

function MyButton({ title }: { title: string }) {
    return (
        <button>{ title }</button>
    );
}

export default function App() {
    return (
        <div>
            <h1>欢迎来到我的应用</h1>
            <MyButton title='我是一个按钮' />
        </div>
    );
}

root.render(<App />);