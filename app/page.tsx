'use client'

import ContactPerson from '@/components/ui/ContactPerson'
import { toast } from '@/components/ui/sonner'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import {
  Ban,
  CircleCheck,
  Loader,
  MessageSquare,
  Search,
  TriangleAlert,
} from 'lucide-react'

export default function Home() {
  const success = () => {
    toast.success('Operation successful!')
  }

  const error = () => {
    toast.error('An error occurred. Please try again.')
  }

  const warning = () => {
    toast.warning('Potential issue detected.')
  }

  const loading = () => {
    toast.loading('Loading...')
  }

  return (
    <main className="p-10 min-h-screen">
      <Input
        placeholder="Masukkan nama"
        errorMessage="Nama tidak boleh kosong"
        label="Nama"
        icon={<Search className="w-5 sm:w-7" />}
        iconPosition="right"
      />
      <ContactPerson>
        <Button variant={'primary'} disabled={false}>
          <MessageSquare size={20} /> Contact Person 1
        </Button>
        <Button variant={'primary'} disabled={false}>
          <MessageSquare size={20} /> Contact Person 2
        </Button>
      </ContactPerson>
      <div className="flex gap-5 m-5">
        <Button onClick={success} variant={'primary'} disabled={false}>
          <CircleCheck size={20} /> Success
        </Button>
        <Button onClick={error} variant={'secondary'} disabled={false}>
          <Ban size={20} /> Error
        </Button>
        <Button onClick={warning} variant={'ghost'} disabled={false}>
          <TriangleAlert size={20} /> Warning
        </Button>
        <Button onClick={loading} variant={'tertiary'} disabled={false}>
          <Loader size={20} /> Loading
        </Button>
      </div>
    </main>
  )
}
