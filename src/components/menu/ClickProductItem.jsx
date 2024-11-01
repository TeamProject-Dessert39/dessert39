import { useDispatch } from "react-redux";
import ReadMore from "../button/ReadMore";
import { ProductItemComponents } from "./styled";
import { onModalData } from "../../store/modules/menuDataSlice";

const ClickProductItem = ({...item}) => {
    const {imgurl , name , price} = item
    const dispatch = useDispatch()

    const onModal = () =>{
        dispatch(onModalData(item))
    }
    return (
        <ProductItemComponents>
            <img src={imgurl} alt={name} />
            <strong>{name}</strong>
            <p>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
            <button onClick={onModal}>자세히보기</button>
        </ProductItemComponents>
    );
};

export default ClickProductItem;