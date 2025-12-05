import Content from "@/components/Content"
import HeaderComponent from "@/components/HeaderComponent"

export default function Home() {
  return (
  <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[90%] h-screen max-sm:w-full">
        <HeaderComponent/>
        <Content />
        <span className="w-full flex justify-end p-3">
            <p className="text-sm border-solid border-b border-sky-400 text-zinc-300">2025 | Alexis García | Fullstack Developer</p>
        </span>
      </div>
  </div>
  )
}
