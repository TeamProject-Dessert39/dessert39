import MenuSlide from "../../components/menu/menu_slide";
import Title from "../../components/menu/Title";
import { MenuCom } from "./styled";
import clickMenu from '../../assets/api/menu_clickMenu';

import ClickMenu from "../../components/menu/ClickMenu";
import MenuTitle from "../../components/menu/menutitle";
import ClickProductItem from "../../components/menu/ClickProductItem";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadingData } from "../../store/modules/menuDataSlice";
import MenuModal from "../../components/menu/menuModal";

const Dessert = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { productItem , newMenuItem , clickMenuItem , Modal } = useSelector(state => state.menu || {});

    const getData = location.pathname.replace(/\/menu\//g, ''); 
    useEffect(()=>{
        dispatch(onLoadingData(getData))
    },[getData])

    const DessertClickMenu = clickMenuItem
    const MenuTit = DessertClickMenu.map(item => item.engtit)

    return (
        <MenuCom>
            { Modal ? <div className="ModalBg"><MenuModal/></div> : null }
            <section className="topCon">
                <div className="inner">
                    <Title title = {`디저트39 신메뉴`}/>
                    <MenuSlide newMenuItem={newMenuItem}></MenuSlide>
                </div>
            </section>
            <section className="mainCon">
                <div className="inner">
                    <Title title = {`DESSERT MENU`}/>
                    <span>찾으시는 메뉴를 클릭해서 확인해보세요.</span>
                    <ul className="click-menu">
                        {
                            DessertClickMenu.map( item => <ClickMenu key={item.id} {...item}/>)
                        }
                    </ul>
                    
                    <div className="con2">
                        {
                            MenuTit.map((item , idx) => (
                                <>
                                    <MenuTitle key={idx + 1} title = {item}></MenuTitle>
                                    <ul>
                                        {
                                            productItem.map(itemData => item === itemData.category && (
                                                <ClickProductItem key={itemData.id} {...itemData}/>
                                            ))
                                        }
                                    </ul>
                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </MenuCom>
    );
};

export default Dessert;