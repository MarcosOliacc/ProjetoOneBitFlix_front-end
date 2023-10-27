import HeaderGeneric from '@/components/common/headerGeneric'
import '@/styles/register.module.scss'
async function Register() {
    return(
        <>
            <main>
                <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Quero fazer login'/>
            </main>
        </>
    )
}
export default Register