import styles from "@/styles/profile.module.scss"
import UserForm from "../user"
import Footer from "@/components/common/footer"

export default function ProfileSection() {
    return (
        <>
            <section className={styles.profSect}>
                <div className={styles.divConteiner}>
                    <p className={styles.title}>Minha Conta</p>
                    <div className={styles.divContent}>
                        <button className={styles.divBtn}>DADOS PESSOAIS</button>
                        <button className={styles.divBtn}>SENHA</button>
                    </div>
                </div>    
                <div className={styles.divContent}>
                    <UserForm/>
                </div>
                
            </section>
            <Footer/>
        </>
    )

}