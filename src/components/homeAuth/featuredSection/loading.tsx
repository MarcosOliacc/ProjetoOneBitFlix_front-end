import HeaderAuth from '@/components/common/headerAuth'
import styles from './styles.module.scss'
import Link from 'next/link'

const Loading = ()=> {
    return (
        <>
            <div style={{
                    backgroundImage: `linear-gradient(#151515, #6666661a, #151515)`,
                    height: '480px',
                }}className={styles.divFather}>
                <HeaderAuth/>
                <section className={styles.sect}>
                </section>
                
            </div>
        </>
    )
}
export default Loading 