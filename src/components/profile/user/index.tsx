/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/profile.module.scss'

const UserForm = () => {
    return(
        <>
            <form className={styles.form}>
                <div className={styles.userContent}>
                    <img src="/userProf.png" alt="userImg" className={styles.userImg}/>
                    <p className={styles.userName}>Nome do Usuario</p>
                </div>
                <div className={styles.formInfos}>
                    <img src="/profile/iconUserAccount.svg" alt="userImg" className={styles.formImg}/>
                    <p className={styles.userTime}>Membro desde <br /> 20 de Abril de 2020</p>
                </div>
                <hr />
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.label}>NOME</label>
                        <input type="text" 
                            name='firstName' 
                            id='firstName' 
                            placeholder='Qual o seu primeiro nome?' 
                            className={styles.inputF}
                            value='username' required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.label}>SOBRENOME</label>
                        <input type="text" 
                            name='lastName' 
                            id='lastName' 
                            placeholder='Qual o seu último nome?' 
                            className={styles.inputF}
                            value='username' required
                        />
                    </div>                    
                </div>
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>CELULAR</label>
                        <input type="number" 
                            name='phone' 
                            id='phone' 
                            placeholder='(xx) 9xxxx-xxxx' 
                            className={styles.inputF}
                            value='userPhone' required
                        />
                    </div>   
                </div>
                <div className={styles.groupContent}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>EMAIL</label>
                        <input type="email" 
                            name='email' 
                            id='email' 
                            placeholder='jhonDoe@email.com' 
                            className={styles.inputF}
                            value='userEmail' required
                        />
                    </div>                    
                </div>

                <button type='submit' className={styles.formBtn}>SALVAR ALTERAÇÕES</button>   
 

            </form>
        </>
    )
}
export default UserForm