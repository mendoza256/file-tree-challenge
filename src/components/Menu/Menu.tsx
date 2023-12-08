import MenuItem from "./MenuItem";
// import data from public folder
import data from "../../../public/data.json";
import { FileType } from "../../types/baseTypes";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="title">MENU</div>
      <MenuItem fileStructure={data as FileType} level={0} />
    </div>
  );
};

export default Menu;
