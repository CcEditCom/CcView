import { useRouter } from 'next/router'
import { useEffect } from 'react'

function DesignPage() {
    const router = useRouter()
    const { did } = router.query

    useEffect(() => {
        // Always do navigations after the first render
        router.push('/design/10000', undefined, { shallow: true })
    }, [])

    return <div>Welcome to DesignPage： {did}!</div>
}

export default DesignPage