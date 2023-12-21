import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

export const TipsDialog = ({
  isDeleteMode,
  isEditMode,
  editModeMsg,
  deleteModeMsg,
  setIsTip,
}: {
  isDeleteMode: boolean;
  isEditMode: boolean;
  editModeMsg: string;
  deleteModeMsg: string;
  setIsTip: (val: boolean) => void;
}) => (
  <motion.div
    initial={{ translateY: "-100px", opacity: 0 }}
    whileInView={{ translateY: "0px", opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
    className={`max-sm:text-md max-sm:w-4/5 ${isDeleteMode && "bg-red-200"} ${
      isEditMode && "bg-green-300"
    } sm:w-1/3 shadow-xl max-sm:p-4 sm:p-[2vw] max-sm:rounded-lg sm:rounded-[1vw] fixed sm:top-[7vw] max-sm:top-20 z-50 text-center w-full sm:text-[1.2vw] font-medium text-slate-500`}
  >
    <h1 className="relative">
      Tip
      <GrClose
        onClick={() => setIsTip(false)}
        className="absolute right-0 top-0 text-slate-500 font-bold cursor-pointer"
      />
    </h1>
    <h1 className="w-full">
      {isDeleteMode && deleteModeMsg}
      {isEditMode && editModeMsg}
    </h1>
  </motion.div>
);
