'use client'

import ContactPerson from '@/components/ui/ContactPerson'
import { toast } from '@/components/ui/Toast'
import { useAlert } from '@/components/ui/Alert'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import {
  Ban,
  CircleCheck,
  Info,
  Loader,
  MessageSquare,
  Search,
  TriangleAlert,
} from 'lucide-react'

export default function Home() {
  const { alert } = useAlert()

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
        <Button
          onClick={() => {
            toast.success('Operation successful!')
          }}
          variant={'primary'}
          disabled={false}
        >
          <CircleCheck size={20} /> Success
        </Button>
        <Button
          onClick={() => {
            toast.error('An error occurred. Please try again.')
          }}
          variant={'secondary'}
          disabled={false}
        >
          <Ban size={20} /> Error
        </Button>
        <Button
          onClick={() => {
            toast.warning('Potential issue detected.')
          }}
          variant={'ghost'}
          disabled={false}
        >
          <TriangleAlert size={20} /> Warning
        </Button>
        <Button
          onClick={() => {
            toast.loading('Loading...')
          }}
          variant={'tertiary'}
          disabled={false}
        >
          <Loader size={20} /> Loading
        </Button>
      </div>
      <div className="flex gap-5 m-5">
        <Button
          onClick={() => {
            alert({
              title: 'Success alert',
              description:
                'Lorem ipsum dolor sit amet,consectetur adipiscing elit',
              variant: 'success',
            })
          }}
          variant={'primary'}
          disabled={false}
        >
          <CircleCheck size={20} /> Success
        </Button>
        <Button
          onClick={() => {
            alert({
              title: 'Error alert',
              description:
                'Lorem ipsum dolor sit amet,consectetur adipiscing elit',
              variant: 'error',
            })
          }}
          variant={'secondary'}
          disabled={false}
        >
          <Ban size={20} /> Error
        </Button>
        <Button
          onClick={() => {
            alert({
              title: 'Warning alert',
              description:
                'Lorem ipsum dolor sit amet,consectetur adipiscing elit',
              variant: 'warning',
            })
          }}
          variant={'ghost'}
          disabled={false}
        >
          <TriangleAlert size={20} /> Warning
        </Button>
        <Button
          onClick={() => {
            alert({
              title: 'Info alert',
              description:
                'Lorem ipsum dolor sit amet,consectetur adipiscing elit',
              variant: 'info',
            })
          }}
          variant={'tertiary'}
          disabled={false}
        >
          <Info size={20} /> Info
        </Button>
      </div>
    </main>
  )
}
