'use client'

import Script from 'next/script'
import { useRef } from 'react'

const GoogleLogin = () => {
  const divRef = useRef<HTMLDivElement>(null)

  const onLoad = () => {
    if (typeof window === 'undefined' || !window.google || !divRef.current) {
      return
    }

    try {
      window.google.accounts.id.initialize({
        ux_mode: 'popup',
        client_id:
          '884590715533-shglopt0be7mj3g8vkr4n9j0taeq0p1s.apps.googleusercontent.com',
        callback: async (res) => {
          alert(res.credential) // TODO: handle this
        },
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
      <div ref={divRef} id="login-with-google-button" />
    </>
  )
}

export default GoogleLogin
