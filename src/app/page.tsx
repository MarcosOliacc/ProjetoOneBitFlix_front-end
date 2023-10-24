import styles from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from '../components/homeNoAuth/headerNoAuth'
import PresentationSect from '@/components/homeNoAuth/presentationSect'
import CardSect from '@/components/homeNoAuth/cardSect'
export default function HomeNoAuth() {
  return(
    <>
      <main>
        <div className={styles.sectionBack}>
          <HeaderNoAuth/>
          <PresentationSect/>
        </div>
        <CardSect/>
        
      </main>
    </>
  )
}