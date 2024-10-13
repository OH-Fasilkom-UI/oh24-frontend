'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'

export const EventFAQAccordion = [
  {
    question: 'Apakah saya harus mendaftar dulu?',
    answer:
      'Ya, peserta diharuskan mendaftar terlebih dahulu melalui form pendaftaran yang sudah disediakan di Website Open House Fasilkom UI. Pastikan kamu mengecek website atau media sosial resmi Open House Fasilkom UI untuk detail pendaftaran.',
  },
  {
    question: 'Apa saja yang bisa saya harapkan di Open House ini?',
    answer:
      "Kamu dapat mengharapkan banyak hal, seperti:\n1. Fun Coding: Belajar coding dengan cara interaktif dan menyenangkan.\n2. Mentoring Sessions: Mendapatkan informasi dari mahasiswa Fasilkom UI tentang kehidupan perkuliahan.\n3. CS Connect: Talkshow online untuk pengenalan Fasilkom UI.\n4. Tour de Campus: Tur kampus Fasilkom dengan mentor.\n5. Interactive Class: Kelas interaktif dengan dosen Fasilkom UI.\n6. Exhibition: Booth jurusan dan organisasi.\n7. Wall of Fame: Profil singkat individu inspiratif dari Fasilkom UI.\n8. Parent's Talkshow: Sesi untuk orang tua terkait penerimaan mahasiswa baru dan biaya kuliah.\n9. Wall of Dream: Pameran interaktif di mana peserta dapat menuliskan impian mereka.",
  },
  {
    question: 'Apakah ada sesi konsultasi tentang jalur masuk Fasilkom UI?',
    answer:
      'Ya, akan ada mentoring session di mana kamu bisa membahas berbagai jalur masuk seperti SNBP, SNBT, SIMAK UI, dan lainnya. Kamu juga bisa berkonsultasi langsung dengan mentor melalui kegiatan ini.',
  },
  {
    question: 'Bagaimana kalau saya tidak bisa datang langsung ke UI?',
    answer:
      'Jika tidak bisa hadir secara langsung, kamu bisa mengikuti acara CS Connect yang diadakan secara online pada tanggal 9 November 2024. Acara ini mirip dengan main event tetapi dilakukan secara virtual.',
  },
  {
    question: 'Apa saja yang perlu saya siapkan sebelum datang ke acara ini?',
    answer:
      'Persiapkan pertanyaan tentang program studi, jalur masuk, atau aspek lain yang ingin kamu ketahui. Bawa alat tulis atau gadget untuk mencatat informasi penting dan cek jadwal acara agar lebih siap.',
  },
  {
    question: 'Di mana saya bisa mendapatkan info lebih lanjut?',
    answer:
      'Informasi lebih lanjut bisa kamu dapatkan melalui website resmi dan media sosial Open House Fasilkom UI: Instagram (@ohfasilkom), Twitter (@OHFasilkom), TikTok (@openhousefasilkomui), YouTube (Fasilkom UI).',
  },
  {
    question: 'Di Open House Fasilkom UI ngapain aja sih?',
    answer:
      "Banyak kegiatan seperti Fun Coding, Interactive Class, Tour de Campus, Exhibition, Parent's Talkshow, Mentoring Sessions, serta Wall of Fame yang menampilkan profil alumni Fasilkom UI.",
  },
  {
    question: 'Siapa saja yang boleh datang ke Open House ini?',
    answer:
      "Open House ini terbuka untuk siswa SMA atau sederajat, siswa gap year/semi gap year, serta orang tua murid yang ingin mendapatkan informasi lebih lanjut. Akan ada seminar Parent's Talkshow pada acara puncak di tanggal 23 November 2024.",
  },
]

const RegisterAccordion = () => {
  return (
    <div
      id="RegisterAccordion"
      className="w-full h-[20vh] max-lg:h-[16vh] mt-[48rem] max-lg:mt-8 flex flex-col items-center"
    >
      <h1 className="text-[#B91B70] text-t3 max-lg:text-t4 max-md:text-t5 mb-16 text-center w-[83vw]">
        Masih bingung mau pilih opsi yang mana? 🤔
      </h1>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col lg:gap-4 z-20 w-[83vw]"
      >
        {EventFAQAccordion.map((faq, index) => (
          <div key={index} className="my-2">
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="max-md:text-[16px] max-sm:text-[12px] font-bold">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  )
}

export default RegisterAccordion
