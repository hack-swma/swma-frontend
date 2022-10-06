import styled from 'styled-components';

export const background = styled.div`
    > button {
        border: 0;
        background: none;
        color: white;
        font-size: 20px;
    }
    > .modal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    > .modal button {
        outline: none;
        cursor: pointer;
        border: 0;
    }
    
    > .modal>section {
        width: 90%;
        height: 90%;
        max-width: 750px;
        max-height: 150px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        animation: modal-show 1.3s;
        overflow: hidden;
    }
    
    > .modal>section>header {
        position: relative;
        padding: 16px 64px 16px 16px;
        font-weight: 700;
    }
    
    > .modal>section>header button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }
    > .modal.openModal {
        display: flex;
        align-items: center;
        animation: modal-bg-show 0.5s;
    }
    
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
    
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
    
        to {
            opacity: 1;
        }
    }
    h1 {
        font-size: 30px;
    }
`;