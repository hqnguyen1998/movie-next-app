'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
const Dialog = dynamic(() => import("@/components/ui/dialog").then(modal => modal.Dialog), {ssr: false})

type Props = {
    children: React.ReactNode
}

function Layout({children}: Props) {
    const router = useRouter()
    const onHandleOpenChange = () => {
        router.back();
    }

  return (
    <Dialog open onOpenChange={onHandleOpenChange} >
        {children}
    </Dialog>
  )
}

export default Layout