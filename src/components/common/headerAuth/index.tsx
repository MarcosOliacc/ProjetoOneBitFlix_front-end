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
        router.push(`/home/search?name=${sName}`)
        setSName('')
    }
    const handleSearchClick = ()=> {
        if(sName){
            router.push(`/home/search?name=${sName}`)
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

export default HeaderAuth