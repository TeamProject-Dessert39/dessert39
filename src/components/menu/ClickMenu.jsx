import { ClickMenuComponents } from "./styled";

const ClickMenu = ({imgurl , hoverimg , title}) => {
    return (
        <ClickMenuComponents>
            <figure>
                <img src={imgurl} alt={title} />
                <img src={hoverimg} alt={title} />
            </figure>
            <strong>
                {title}
            </strong>
        </ClickMenuComponents>
    );
};

export default ClickMenu;