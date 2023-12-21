import { PropsWithChildren } from "react";

export const CardLayout = ({
  isEditMode,
  isDeleteMode,
  key,
  onclick,
  children,
}: {
  isEditMode: boolean;
  isDeleteMode: boolean;
  onclick: (id: any) => void;
  key: string;
  children: PropsWithChildren<any>;
}) => (
  <div
    className={`flex pb-10 ${isDeleteMode && "shake"} ${isEditMode && "pulse"}`}
    key={key}
    onClick={onclick}
  >
    {children}
  </div>
);
