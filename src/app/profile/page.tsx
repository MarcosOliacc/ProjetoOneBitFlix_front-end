import HeaderAuth from '@/components/common/headerAuth'
import ProfileSection from '@/components/profile/profileSection'
import styles from '@/styles/profile.module.scss'

export const metadata = {
    title: 'OneBitFlix - Account',
    description: 'Uma plataforma streaming de cursos de programação'
}

const Profile = () => {
    return(
        <>
            <main className={styles.main}>
                <HeaderAuth/>
                <ProfileSection/>
            </main> 
        </>
    )
}
export default Profile