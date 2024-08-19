import React, { useRef } from 'react';
import { gsap } from 'gsap';

const WidgetDrawer = () => {
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDrawer = () => {
    const drawer = drawerRef.current;
    const isOpen = drawer.classList.contains('open');

    if (isOpen) {
      gsap.to(drawer, { x: '-100%', duration: 0.5 });
      drawer.classList.remove('open');
    } else {
      gsap.to(drawer, { x: '0%', duration: 0.5 });
      drawer.classList.add('open');
    }
  };

  return (
    <div>
      <button ref={buttonRef} onClick={toggleDrawer}>
        {drawerRef.current?.classList.contains('open') ? 'Close Drawer' : 'Open Drawer'}
      </button>
      <div
        ref={drawerRef}
        className="drawer"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '250px',
          height: '100%',
          backgroundColor: '#333',
          color: '#fff',
          transform: 'translateX(-100%)',
          transition: 'transform 0.5s ease',
        }}
      >
        <p>Drawer Content</p>
      </div>
    </div>
  );
};

export default WidgetDrawer;
