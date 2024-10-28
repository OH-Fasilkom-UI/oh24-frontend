import { redirect } from 'next/navigation'
import { MenteeRegistrationModule } from '@/modules/MenteeRegistrationModule'

const Page = () => {
  redirect('/')
  return (
    <main>
      <MenteeRegistrationModule />
    </main>
  )
}

export default Page
