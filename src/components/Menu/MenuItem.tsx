import { useState } from "react";
import { FileType } from "../../types/baseTypes";

interface MenuItemProps {
  fileStructure: FileType;
  level: number;
  onClick?: () => void;
}

const MenuItem = ({ fileStructure, level }: MenuItemProps) => {
  const fileStructureKeyArr = Object.keys(fileStructure);
  const hasChildren = fileStructureKeyArr.includes("children");
  const [open, setOpen] = useState(false);
  const isRoot = level === 0;

  console.log(
    fileStructure.name,
    "level " + level,
    "open " + open,
    "children " + hasChildren
  );

  const handleMenuItemClick = () => {
    if (hasChildren && !open) {
      setOpen(true);
    } else if (hasChildren && open) {
      setOpen(false);
    }
  };

  return (
    <div className="file-container">
      <div
        className={`file ${isRoot ? "root" : ""}`}
        onClick={handleMenuItemClick}
      >
        <span className="name">
          {hasChildren
            ? `📔 ${fileStructure.name}`
            : `📄 ${fileStructure.name}`}
        </span>
      </div>
      {open &&
        fileStructure.children.map((child: FileType) => (
          <MenuItem
            fileStructure={child}
            level={level + 1}
            onClick={() => handleMenuItemClick}
          />
        ))}
    </div>
  );
};

export default MenuItem;
