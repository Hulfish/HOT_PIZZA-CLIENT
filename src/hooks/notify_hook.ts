import { toast } from 'react-toastify';
export default function useNotify () {
    function notify (message: string | undefined) {
        toast(message || "_no_message_", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
    return {notify}
}