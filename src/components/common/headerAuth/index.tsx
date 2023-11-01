'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.scss'
import Modal from 'react-modal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import './basic.scss'
Modal.setAppElement('body')

const HeaderAuth = ()=> {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState(false)
    const [id, setId] = useState('')

    const hendleLogout = () => {
        sessionStorage.clear()
        router.push('/login')
    }
    if(typeof window !== 'undefined') {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 0) {
                setId('active')
                console.log('alo')
            } else {
                setId('')
            }
        })
    }
    return (
        <>  
        <div id={id} className={styles.conteiner}>
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
        </div>

        </>
    )
}
export default HeaderAuth