import { useRef, useState } from 'react';
import './stylesContainerAjustavel.css';

export const Container_Ajustavel = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [height, setHeight] = useState<number>(200);
    const containerRef = useRef<HTMLDivElement>(null);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleMouseDown = (e: MouseEvent): void=> {
      e.preventDefault();
      const startY = e.clientY;
      const startHeight = containerRef.current?.offsetHeight || 0;
      const containerTop = containerRef.current?.getBoundingClientRect().top || 0;

      const onMouseMove = (e:MouseEvent) => {
        const newHeight = startHeight + (e.clientY - startY);
        setHeight(newHeight);
      };
  
      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove as any);
        document.removeEventListener('mouseup', onMouseUp);
      };
  
      document.addEventListener('mousemove', onMouseMove as any);
      document.addEventListener('mouseup', onMouseUp);
    };
  

    return (
        <div>
          <button onClick={handleToggle}>
            {isOpen ? 'Fechar' : 'Abrir'}
          </button>
          {isOpen && (
            <div
              ref={containerRef}
              className="resizable-container"
              style={{ height: `${height}px` }}
            >
              <div className="content">
                {/* Conteúdo do container */}
              </div>
              <div
                className="resizer"
                onMouseDown={handleMouseDown}
              />
            </div>
          )}
        </div>
      );
}
