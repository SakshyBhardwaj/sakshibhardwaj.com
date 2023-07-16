import { motion } from "framer-motion"

const Layout = ({ children }) => (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }}

    >
        {children}
    </motion.div >
);
export default Layout