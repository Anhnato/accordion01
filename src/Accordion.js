import React,{ useState } from 'react';

function Accordion() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (index) => {
    if(openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const accordionData = [
    "Accordion 1",
    "Accordion 2",
    "Accordion 3",
  ];

  return (
    <div>
      <h1>Accordion</h1>
      <ul>
        {accordionData.map((item, index) => (
          <li key={index}>
            <div className='accordion-title' onClick={() => handleItemClick(index)}>
              {item}
            </div>
            {openItem === index && (
              <div className='accordion-content'>Content for {item}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accordion;