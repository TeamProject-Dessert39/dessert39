import { MenuTitleComponents } from "./styled";

const MenuTitle = ({title}) => {
    return (
        <MenuTitleComponents>
            <h3>
                {title}
            </h3>
        </MenuTitleComponents>
    );
};

export default MenuTitle;