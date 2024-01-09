"use client";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Cursor() {
  const cursorRef = useRef<any>(null);
  const shadowRef = useRef<any>(null);

  const [cursorPos, setCursorPos] = useState<any>({ x: 0, y: 0 });

  const updateCursorPosition: any = useCallback(() => {
    if (cursorRef.current && shadowRef.current) {
      const x = window.innerWidth - cursorRef.current.offsetWidth / 2;
      const y = window.innerHeight - cursorRef.current.offsetHeight / 2;
      const mouseX = (x - cursorPos.x) * 0.1;
      const mouseY = (y - cursorPos.y) * 0.1;

      setCursorPos({ x: cursorPos.x + mouseX, y: cursorPos.y + mouseY });
      cursorRef.current.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      shadowRef.current.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      requestAnimationFrame(updateCursorPosition);
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateCursorPosition);

    return () => {
      cancelAnimationFrame(updateCursorPosition);
    };
  }, [updateCursorPosition]);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-shadow" ref={shadowRef} />
    </>
  );
}
