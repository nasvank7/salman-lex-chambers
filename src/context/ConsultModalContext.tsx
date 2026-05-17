"use client";
import { createContext, useContext, useState } from "react";

const ConsultModalContext = createContext<{
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({ open: false, openModal: () => {}, closeModal: () => {} });

export function ConsultModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ConsultModalContext.Provider
      value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}
    >
      {children}
    </ConsultModalContext.Provider>
  );
}

export const useConsultModal = () => useContext(ConsultModalContext);
