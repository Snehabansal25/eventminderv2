import { LoginForm } from '@/components/ui/formvalidation/schema'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-1 flex-col w-full h-screen items-center justify-center">
        <h1>Login</h1>
        <LoginForm/>
    </div>
  )
}
export default Page;