import HeaderAuth from "@/components/common/headerAuth";

export default function Layout({children}:{children: React.ReactNode}) {
    return (
        <>
            <HeaderAuth/>
            {children}
        </>
    )
}