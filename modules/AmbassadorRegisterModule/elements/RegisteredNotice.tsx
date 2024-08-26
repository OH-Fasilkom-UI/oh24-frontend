import Button from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"
import { CircleUserRound, Info, SquareUserRound } from "lucide-react"
import Link from "next/link"

export const RegisteredNotice = () => {
  return (
    <Modal
      icon={Info}
      defaultOpen
      hideClose
      disableClickOutside
      title="Kamu Sudah Mendaftar"
      buttons={[
        <Link href='/profile' className="w-full max-w-[280px]">
          <Button className="w-full">
            <CircleUserRound />
            Profile Page
          </Button> 
        </Link>,
        <Link href='/ambassador' className="w-full max-w-[280px]">
          <Button variant='secondary' className="w-full">
            <SquareUserRound />
            Ambassador Page
          </Button> 
        </Link>,
      ]}
    >
      Kamu sudah mendaftar sebagai ambassador. Kami akan menghubungimu dengan info berikutnya.
    </Modal>
  )
}
