'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.scss'
import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
Modal.setAppElement('body')

const HeaderAuth = ()=> {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState(false)

    const hendleLogout = () => {
        sessionStorage.clear()
        router.push('/login')
    }

    return (
        <>
            <section className={styles.sect}>
                <Link href='/home'>
                    <img src='/logoOnebitflix.svg' alt='logo onebitflix' className={styles.logoImg}/>
                </Link>
                <div className={styles.modalContent}>
                    <form className={styles.form}> <input type="search" name='search' placeholder='Pesquisar' className={styles.input}/></form>
                    <img src="/HomeAuth/iconSearch.svg" alt="lupaPesquisar" className={styles.searchImg}/>
                    <p className={styles.userProfile} onClick={()=> setModalOpen(true)}>ab</p>
                </div>
                <Modal isOpen={modalOpen} onRequestClose={()=> setModalOpen(false)} shouldCloseOnEsc={true}
                    className={styles.modal}
                    overlayClassName={styles.overlay}
                >
                    <Link href='/profile' className={styles.link}><p className={styles.modalLink}>SEUS DADOS</p></Link>
                    <p className={styles.modalLink} onClick={hendleLogout}>SAIR</p>
                </Modal>

            </section>
        </>
    )
}
export default HeaderAuth