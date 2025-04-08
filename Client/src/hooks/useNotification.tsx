import { toast } from 'react-toastify';

interface notificationProps {
    id: string;
    type: "info" | "error" | "success",
    content: string;
}

export const useNotification = () => {
    const notify = ({ id, type, content }: notificationProps) => {
        if (id && toast.isActive(id)) return;

        toast[type](content, {toastId: id});
    };

    return { notify };
}
