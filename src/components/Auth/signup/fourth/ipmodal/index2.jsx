import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as style from './index.style';
import Modal from './index'
const Render = () => {
    const nav = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const injeung = 'IP 인증하기';
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <style.background>
            <button onClick={openModal}>{injeung}</button>
            <Modal open={modalOpen} close={closeModal}>
                <h1>위치 정보를 성공적으로 불러왔습니다.</h1>
            </Modal>
        </style.background>
    );
}
export default Render;