import './container_ajuste_superior.css'
import { useRef, useState, MouseEvent } from 'react'


export const Container_ajustavel_superior = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [heigth, setHeigth] = useState<number>(200)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleMouseDownTop = (e: MouseEvent) => {
        e.preventDefault()
        const startY = e.clientY;
        const startHeight = containerRef.current?.offsetHeight || 0;
        const containerTop = containerRef.current?.getBoundingClientRect().top || 0;

        const onMouseMove = (moveEvent: MouseEvent) => {
            const newHeight = startHeight - (moveEvent.clientY - startY);
            const newTop = containerTop + (moveEvent.clientY - startY);
            if (newHeight > 0) {
                setHeigth(newHeight);
                containerRef.current!.style.top = `${newTop}px`;
            }
        };

        const onMouseUp = (): void => {
            document.removeEventListener('mousemove', onMouseMove as any);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove as any);
        document.addEventListener('mouseup', onMouseUp);
    }

    return (
        <div>
            <button onClick={handleToggle}>
                {isOpen ? 'Fechar' : 'Abrir'}
            </button>
            {isOpen && (
                <div
                    ref={containerRef}
                    className="resizable-container"
                    style={{ height: `${heigth}px` }}
                >
                    <div
                        className="resizer top"
                        onMouseDown={handleMouseDownTop}
                    />
                    <div className="content">
                        {/* Conteúdo do container */}
                    </div>
                </div>
            )}
        </div>
    );
};
