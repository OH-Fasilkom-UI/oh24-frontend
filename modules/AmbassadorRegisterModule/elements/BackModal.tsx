'use client'

import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BackModalProps } from '../interface'

export const BackModal: React.FC<BackModalProps> = ({
  showModal,
  setShowModal,
}) => {
  const router = useRouter()
  return (
    <Modal
      title="Yakin ingin keluar?"
      hideClose
      open={showModal}
      onOpenChange={setShowModal}
      buttons={[
        <Button onClick={() => router.push('/ambassador')} key="close" className='w-full md:max-w-[200px]'>
          Keluar
        </Button>,
        <Button
          className='w-full md:max-w-[200px]'
          variant="secondary"
          onClick={() => setShowModal(false)}
          key="back"
        >
          Batalkan
        </Button>,
      ]}
    >
      Segala data yang sudah diisi akan terhapus jika Anda meninggalkan halaman
      ini
    </Modal>
  )
}
