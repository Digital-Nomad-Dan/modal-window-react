import Modal from './Modal';
import App from './App';
import './button.scss'
import './modal.scss'
import './container.scss'
import { useState } from 'react';



function Container() {

const [store, setStore] = useState({
    modalProperty: {
    showModal: false,
    title: 'Modal1',
    title1: 'Modal1'
},
    modalText: 'Very important message'
})

    return (
        <>
    <App 
    store={store}
    setStore={setStore}
    />
    <Modal 
    store={store}
    setStore={setStore}
    />
        
        </>
    );
}

export default Container;