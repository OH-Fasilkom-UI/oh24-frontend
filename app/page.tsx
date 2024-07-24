import ContactPerson from '@/components/ui/contact-person'
import { MessageSquare, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
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
      <Button variant={'primary'} disabled={false}>
        <User size={20} /> Register
      </Button>
    </main>
  )
}
