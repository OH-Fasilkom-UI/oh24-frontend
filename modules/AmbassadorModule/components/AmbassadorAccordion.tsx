'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'

const AmbassadorAccordion = () => {
  return (
    <div className="w-full max-md:p-7 md:p-20">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Siapa aja sih yang bisa mendaftar menjadi Ambassador OH Fasilkom UI
            2024?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Ambassador Open House Fasilkom UI ditujukan kepada anak-anak SMA
            sederajat/semi gap/gap year yang punya semangat untuk memperkenalkan
            Open House Fasilkom UI!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Benefit yang didapat jadi Ambassador OH Fasilkom UI apa aja?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Setiap Ambassador tentunya akan menikmati serangkaian Special
            Programs yang hanya dapat diakses khusus peserta Ambassador. Nah
            tentunya program tersebut dapat menambah wawasan dan networking
            kamu. OH Ambassador juga akan langsung menjadi peserta Main Event
            dan kalian akan mendapatkan reward karena telah menjadi Ambassador
            OH Fasilkom UI.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Tugas OH Ambassador ngapain aja?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            OH Ambassador akan mempromosikan Open House Fasilkom UI melalui
            konten digital yang diupload di media sosial mereka. Jadi buat kamu
            yang kreatif, suka buat konten, dan punya skill untuk influence
            orang-orang, cocok banget untuk menjadi Ambassador! Selain itu,
            setiap Ambassador juga akan ditugaskan untuk mengajak teman-temannya
            untuk ikut Open House Fasilkom UI 2024. Untuk detailnya akan ada di
            guidebook, yaa!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Tahap seleksinya OH Ambassador apa saja kak?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Terdapat 2 tahap yaa, tahap pertama yaitu seleksi berkas,
            selanjutnya jika tugas-tugas yang kamu kumpulkan sesuai dan memenuhi
            kriteria maka akan dilanjutkan dengan tahap interview. Ini bagian
            yang paling seru karena kamu akan berkesempatan buat bertemu
            langsung dengan kakak-kakak Fasilkom UI yang keren-keren banget.
            Kamu bisa manfaatin ini untuk tanya-tanya seputar Fasilkom UI yaa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Kak emang bener kalo jadi OH Ambassador bisa berkemungkinan jadi
            maba Fasilkom UI?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Dengan menjadi Ambassador, tidak ada jaminan apapun untuk diterima
            sebagai mahasiswa Fasilkom yaa! Tetapi spesial program untuk
            ambassador membuka kesempatan agar kalian dapat bertanya-tanya
            mengenai informasi jalur masuk Fasilkom UI. Selain itu, kalian juga
            bisa jadi lebih siap menjadi anak Fasilkom dan menambah relasi!
            HEHEHE liat aja di testimoni Ambassador 2023 (banyak yang masuk
            Fasilkom UI loh!)
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Timeline seleksi dan program Ambassador?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Open Recruitment OH Ambassador akan berlangsung selama 3 minggu nih
            sampai tanggal 8 September dan pengumuman ambassadornya akan
            seminggu setelahnya. Special program Ambassador akan dimulai dari
            pertengahan bulan september sampai Main Event OH.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Kak kalau misalnya aku ga ikut banyak kegiatan organisasi emangnya
            bisa diterima kak?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Bisa dongg, karena selain organisasi faktor keberhasilanmu sangat
            ditentukan oleh tugas video perkenalan kamu nih, kemampuan
            komunikasi, serta skill marketing kamu di sesi interview nanti! Jadi
            buat sekeren mungkin yaa tugasnyaa!!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AmbassadorAccordion
