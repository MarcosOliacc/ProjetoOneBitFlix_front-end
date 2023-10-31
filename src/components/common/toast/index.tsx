import './toast.scss'
import styles from '@/styles/register.module.scss'
interface props {
    message: string
    color: string
}

const ToastComponent = ({message,color}: props)=> {
    return(
        <>
            <div id={color} className={styles.toast} >
                <p className={styles.toastP}>{message}</p>
            </div>
        </>
    )
}
export default ToastComponent