import { Toast, ToastBody } from "reactstrap"
import './toast.scss'
import styles from '@/styles/register.module.scss'
interface props {
    isOpen: boolean
    message: string
    color: boolean
}

const ToastComponent = ({isOpen,message,color}: props)=> {
    return(
        <>
            <Toast id={`${color}`} className={styles.toast} isOpen={isOpen}>
                <ToastBody className="text-center">{message}</ToastBody>
            </Toast>
        </>
    )
}
export default ToastComponent