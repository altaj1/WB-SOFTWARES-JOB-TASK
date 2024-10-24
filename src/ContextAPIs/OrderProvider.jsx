import { createContext, useRef, useState } from "react";

export const OrderContext = createContext(null)
const OrderProvider = ({children}) => {
    const [examID, setExamID] = useState(null)
    const [addcourses, setAddcourses] = useState([])
    const [TotalCoursePrice, setTotalCoursePrice] = useState(1)
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(true)
    const sidebarRef = useRef(null);
    const [checkoutData, setCheckoutData] = useState({})

    const info = {
        examID,
        setExamID,
        open,
        setOpen,
        sidebarRef,
        addcourses,
        setAddcourses,
        TotalCoursePrice,
        setTotalCoursePrice,
        quantity, setQuantity,
        checkoutData, setCheckoutData
    }
    return (
        <OrderContext.Provider value={info} >
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;