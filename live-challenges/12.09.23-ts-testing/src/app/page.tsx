import Image from 'next/image'
import Title from "@/components/Title"

export default function Home() {
  return (
    <main>
          <Title title="First title" className="bg-red-200" /> {/* tailwind inkluderer en del CSS*/}
          <Title title="Second title" />
    </main>
  )
}
