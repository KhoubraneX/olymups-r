import React from "react";

const { useState } = React;

const data = [{id: 0, label: "1 stone"}, {id: 1, label: "2 stone"} , {id: 2, label: "3 stone"}];

export const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : data[0].label}
        <svg style={{transform:`${isOpen ? "rotate(180deg)" : "rotate(0deg)"}`}} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div key={item.id} className="dropdown-item" onClick={e => {handleItemClick(e.target.id); toggleDropdown() } } id={item.id}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
