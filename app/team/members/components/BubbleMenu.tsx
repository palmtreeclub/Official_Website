import { AiFillPlusCircle } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { motion } from "framer-motion";

export const BubbleMenu = ({
  isDeleteMode,
  isEditMode,
  isCreateMode,
  isOptions,
  setEditMode,
  setDeleteMode,
  setIsCreateMode,
  onMenuPress,
}: {
  isDeleteMode: boolean;
  isEditMode: boolean;
  isCreateMode: boolean;
  isOptions: boolean;
  setEditMode: (val: boolean) => void;
  setDeleteMode: (val: boolean) => void;
  setIsCreateMode: (val: boolean) => void;
  onMenuPress: () => void;
}) => (
  <div className="">
    {isOptions && (
      <>
        <motion.div
          initial={{ translateY: "100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className={`bg-red-600 fixed sm:p-[.6vw] rounded-[50%]  hover:bg-red-600/75 cursor-pointer 
            text-white z-50 transition-all  ${
              isDeleteMode && "grayscale"
            } duration-300  sm:bottom-[21vw] max-sm:bottom-[30vh] sm:right-[3.5vw] max-sm:text-4xl max-sm:right-7 sm:text-[3vw] max-sm:p-3`}
        >
          <MdDelete
            onClick={() => {
              setEditMode(false);
              setDeleteMode(!isDeleteMode);
            }}
            className={``}
          />
        </motion.div>
        <motion.div
          initial={{ translateY: "100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className={`cursor-pointer  ${
            isCreateMode && "grayscale"
          } bg-white rounded-[50%] text-blue-600 z-50 hover:text-blue-600/75 transition-all duration-300 fixed sm:bottom-[15vw] max-sm:bottom-[22vh] sm:right-[3vw] max-sm:text-6xl max-sm:right-7 sm:text-[5vw]`}
        >
          <AiFillPlusCircle
            onClick={() => {
              if (isCreateMode) {
                onMenuPress();
              }
              setIsCreateMode(!isCreateMode);
            }}
          />
        </motion.div>
        <motion.div
          initial={{ translateY: "100px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: false }}
          className={`bg-green-600 fixed sm:p-[.6vw] rounded-[50%]  hover:bg-green-600/75 cursor-pointer 
            text-white z-50  ${
              isEditMode && "grayscale"
            } transition-all duration-300 max-sm:p-3 sm:bottom-[9.5vw] max-sm:bottom-[14vh] sm:right-[3.5vw] max-sm:text-4xl max-sm:right-7 sm:text-[3vw]`}
        >
          <MdEdit
            onClick={() => {
              setEditMode(!isEditMode);
              setDeleteMode(false);
            }}
            className={``}
          />
        </motion.div>
      </>
    )}
    <AiFillPlusCircle
      onClick={() => onMenuPress()}
      className={`cursor-pointer ${
        isOptions && "rotate-[135deg]"
      } text-yellow-500 z-50 hover:text-yellow-500/75 transition-all duration-300 fixed sm:bottom-[3vw] max-sm:bottom-10 sm:right-[3vw] max-sm:text-7xl max-sm:right-5 sm:text-[5vw]`}
    />
  </div>
);
