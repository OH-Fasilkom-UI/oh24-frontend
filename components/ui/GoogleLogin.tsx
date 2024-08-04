'use client'

import Script from 'next/script'
import { useRef, ComponentPropsWithoutRef } from 'react'

export interface GoogleLoginProps extends ComponentPropsWithoutRef<'div'> {
  onCredential: (credential: string) => void
}

const GoogleLogin = ({ onCredential, ...props }: GoogleLoginProps) => {
  const divRef = useRef<HTMLDivElement>(null)

  const onLoad = () => {
    if (typeof window === 'undefined' || !window.google || !divRef.current) {
      return
    }

    try {
      window.google.accounts.id.initialize({
        ux_mode: 'popup',
        client_id:
          '409542269437-0f7lev9ea973jgmfdgnd1rgq5i32bguj.apps.googleusercontent.com',
        callback: async (res) => onCredential(res.credential),
      })
      window.google.accounts.id.renderButton(divRef.current, {
        theme: 'filled_blue',
        size: 'medium',
        type: 'standard',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" onLoad={onLoad} />
      <div ref={divRef} id="login-with-google-button" {...props} />
    </>
  )
}

export default GoogleLogin
