'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'

import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'

interface FAQInterface {
  question: string
  answer: string
}

const AmbassadorFAQData: FAQInterface[] = [
  {
    question: 'Siapa aja sih yang bisa mendaftar menjadi Ambassador OH Fasilkom UI 2024?',
    answer:
      'Ambassador Open House Fasilkom UI ditujukan kepada anak-anak SMA sederajat/semi gap/gap year yang punya semangat untuk memperkenalkan Open House Fasilkom UI!',
  },
  {
    question: 'Benefit yang didapat jadi Ambassador OH Fasilkom UI apa aja?',
    answer:
      'Setiap Ambassador tentunya akan menikmati serangkaian Special Programs yang hanya dapat diakses khusus peserta Ambassador. Nah tentunya program tersebut dapat menambah wawasan dan networking kamu. OH Ambassador juga akan langsung menjadi peserta Main Event dan kalian akan mendapatkan reward karena telah menjadi Ambassador OH Fasilkom UI.',
  },
  {
    question: 'Tugas OH Ambassador ngapain aja?',
    answer:
      'OH Ambassador akan mempromosikan Open House Fasilkom UI melalui konten digital yang diupload di media sosial mereka. Jadi buat kamu yang kreatif, suka buat konten, dan punya skill untuk influence orang-orang, cocok banget untuk menjadi Ambassador! Selain itu, setiap Ambassador juga akan ditugaskan untuk mengajak teman-temannya untuk ikut Open House Fasilkom UI 2024. Untuk detailnya akan ada di guidebook, yaa!',
  },
  {
    question: 'Tahap seleksinya OH Ambassador apa saja kak?',
    answer:
      'Terdapat 2 tahap yaa, tahap pertama yaitu seleksi berkas, selanjutnya jika tugas-tugas yang kamu kumpulkan sesuai dan memenuhi kriteria maka akan dilanjutkan dengan tahap interview. Ini bagian yang paling seru karena kamu akan berkesempatan buat bertemu langsung dengan kakak-kakak Fasilkom UI yang keren-keren banget. Kamu bisa manfaatin ini untuk tanya-tanya seputar Fasilkom UI yaa.',
  },
  {
    question: 'Kak emang bener kalo jadi OH Ambassador bisa berkemungkinan jadi maba Fasilkom UI?',
    answer:
      'Dengan menjadi Ambassador, tidak ada jaminan apapun untuk diterima sebagai mahasiswa Fasilkom yaa! Tetapi spesial program untuk ambassador membuka kesempatan agar kalian dapat bertanya-tanya mengenai informasi jalur masuk Fasilkom UI. Selain itu, kalian juga bisa jadi lebih siap menjadi anak Fasilkom dan menambah relasi! HEHEHE liat aja di testimoni Ambassador 2023 (banyak yang masuk Fasilkom UI loh!)',
  },
  {
    question: 'Timeline seleksi dan program Ambassador?',
    answer:
      'Open Recruitment OH Ambassador akan berlangsung selama 3 minggu nih sampai tanggal 8 September dan pengumuman ambassadornya akan seminggu setelahnya. Special program Ambassador akan dimulai dari pertengahan bulan september sampai Main Event OH.',
  },
  {
    question: 'Kak kalau misalnya aku ga ikut banyak kegiatan organisasi emangnya bisa diterima kak?',
    answer:
      'Bisa dongg, karena selain organisasi faktor keberhasilanmu sangat ditentukan oleh tugas video perkenalan kamu nih, kemampuan komunikasi, serta skill marketing kamu di sesi interview nanti! Jadi buat sekeren mungkin yaa tugasnyaa!!',
  }
]


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each child by 0.2 seconds
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.1} },
};

const AmbassadorAccordion = () => {

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Accordion type="single" collapsible className="flex flex-col lg:gap-4 z-20">
        {AmbassadorFAQData.map((faq, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true});

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={itemVariants}
              className='my-2 '
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-md:text-[16px] max-sm:text-[12px] font-bold">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>
    </motion.div>
  )
}

export default AmbassadorAccordion
