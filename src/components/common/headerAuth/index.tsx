/* eslint-disable jsx-a11y/alt-text */
'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.scss'
import Modal from 'react-modal'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import './basic.scss'
Modal.setAppElement('body')

const HeaderAuth = ()=> {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState(false)
    const [id, setId] = useState('')
    const [sName, setSName] = useState('')

    const handleSearch = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        router.push(`/search?name=${sName}`)
        setSName('')
    }
    const handleSearchClick = ()=> {
        if(sName){
            router.push(`/search?name=${sName}`)
            setSName('')            
        }

    }
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
            <section onSubmit={handleSearch} className={styles.sect}>
                <Link href='/home'>
                    <img src='/logoOnebitflix.svg' alt='logo onebitflix' className={styles.logoImg}/>
                </Link>
                <div className={styles.modalContent}>
                    <form className={styles.form}>
                        <input type="search" 
                        name='search'
                        placeholder='Pesquisar' 
                        className={styles.input}
                        value={sName}
                        onChange={(ev)=> {setSName(ev.currentTarget.value.toLocaleLowerCase())}}
                        />
                    </form>
                    <img src="/HomeAuth/iconSearch.svg" alt="lupaPesquisar" className={styles.searchImg} onClick={handleSearchClick}/>
                    <img src='/userProf.png' alt='userImg' className={styles.userProfile} onClick={()=> setModalOpen(true)}/>
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