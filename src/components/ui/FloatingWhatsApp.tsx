import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/51930289206"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle className="h-8 w-8" />
            <span className="sr-only">Contact on WhatsApp</span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
