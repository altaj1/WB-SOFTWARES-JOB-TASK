import { createContext, useRef, useState } from "react";

export const OrderContext = createContext(null)
const OrderProvider = ({children}) => {
    const [examID, setExamID] = useState(null)
    const [addcourses, setAddcourses] = useState([])
    const [TotalCoursePrice, setTotalCoursePrice] = useState(0)
    const [open, setOpen] = useState(true)
    const sidebarRef = useRef(null);
    

    const info = {
        examID,
        setExamID,
        open,
        setOpen,
        sidebarRef,
        addcourses,
        setAddcourses,
        TotalCoursePrice,
        setTotalCoursePrice
    }
    return (
        <OrderContext.Provider value={info} >
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;