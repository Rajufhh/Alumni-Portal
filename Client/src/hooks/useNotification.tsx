import { RootState } from '@/store/Store';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import notificationSound from '@/assets/nofitication-sound.mp3'

interface notificationProps {
    id: string;
    type: "info" | "error" | "success",
    content: string;
}

const playNotificationSound = () => {
    const audio = new Audio(notificationSound); 
    audio.play();
};

export const useNotification = () => {
    const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);

    const notify = ({ id, type, content }: notificationProps) => {
        if (id && toast.isActive(id)) return;

        toast[type](content, {toastId: id, theme: isDarkMode ? 'dark' : 'light'});
        playNotificationSound();
    };

    return { notify };
}
