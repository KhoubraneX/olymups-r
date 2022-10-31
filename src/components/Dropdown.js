import React from "react";

const { useState } = React;


export const Dropdown = ({data , state}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(0);

  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    let dataSelect = [...data]
    dataSelect =  dataSelect.filter((e) => e.id == id)
    setSelectedItem(dataSelect[0].id)
    console.log(dataSelect);
  }
  
  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : data[0].label}
        <svg style={{transform:`${isOpen ? "rotate(180deg)" : "rotate(0deg)"}`}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
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
