import React from 'react';
import { MenuModalComponents } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { onModalClose } from '../../store/modules/menuDataSlice';

const MenuModal = () => {
    const currentModal = useSelector(state=> state.menu.currentModal)
    const dispatch = useDispatch()
    return (
        <MenuModalComponents>
            <figure>
                <img src={currentModal.imgurl} alt="" />
            </figure>
            <button className='closeBtn' onClick={()=>dispatch(onModalClose())}>
                <IoMdCloseCircleOutline size={40} />
            </button>
            <div className="modal-body">
                <div className="product-data">
                    <span>{currentModal.name}</span>
                    <p>{currentModal.con}</p>
                    <strong>가격{currentModal.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                </div>
            </div>
        </MenuModalComponents>
    );
};

export default MenuModal;