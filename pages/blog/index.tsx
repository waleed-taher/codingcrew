
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Hero from '../../components/blogSectionComponents/BlogHero'
import Article from '../../components/blogSectionComponents/Article'
import Author from '../../components/blogSectionComponents/Author'
import CommentSection from '../../components/blogSectionComponents/CommentSection'




const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
   <main className="bg-[#000424] ">
    <div className="flex flex-col gap-4 py-10 mx-auto max-w-contentContainer mdl:py-24 lgl:gap-8 mdl:px-10 xl:px-4">
    <Hero />
    <Article />
    <Author />
    <CommentSection />

    </div>
   </main>
  )
}
