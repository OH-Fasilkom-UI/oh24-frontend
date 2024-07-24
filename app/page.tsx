import ContactPerson from '@/components/ui/contact-person'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

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
        <button className="bg-primary text-primary-foreground">
          Contact Us
        </button>
        <button className="bg-primary text-primary-foreground">
          Contact Us
        </button>
      </ContactPerson>
    </main>
  )
}
