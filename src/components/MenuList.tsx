import React from 'react';

interface DropdownMenuProps {
  onSelection: (selection: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onSelection }) => {


  const handleSelection = (answer: string) => {
    onSelection(answer);
  };

  return (
    <div className="dropdown-container">
  
        <ul className="dropdown-menu">
          <li onClick={() => handleSelection('Yes')}>Yes</li>
          <li onClick={() => handleSelection('No')}>No</li>
        </ul>
   
    </div>
  );
}

export default DropdownMenu;
