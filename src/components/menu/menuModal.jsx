import React from 'react';
import { MenuModalComponents } from './styled';
import { useSelector } from 'react-redux';
import { IoMdCloseCircleOutline } from "react-icons/io";

const MenuModal = () => {
    const currentModal = useSelector(state=> state.menu.currentModal)
    console.log(currentModal)
    return (
        <MenuModalComponents>
            <figure>
                <img src={currentModal[0].imgurl} alt="" />
            </figure>
            <button className='closeBtn'>
                <IoMdCloseCircleOutline size={40} />
            </button>
            <div className="modal-body">
                <div className="product-data">
                    <span>{currentModal[0].name}</span>
                    <strong>{currentModal[0].price}</strong>
                </div>
            </div>
        </MenuModalComponents>
    );
};

export default MenuModal;