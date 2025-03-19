import { Link } from "react-router"

export const Footer = () => {
  return (
    <div className="bg-[hsl(240,10%,3.9%)] h-28 text-white flex justify-between items-center text-2xl font-semibold px-4 fixed bottom-0 w-screen">
        <div className="ml-8">
            <Link to='/home' className="flex gap-3 items-center">
                <img src="/logo.png" alt="logo" className="w-10" />
                <div>Alumni Portal</div>
            </Link>
        </div>

        <div className="flex gap-6 mr-8">
            <a href="instagram.com" target="_blank"><img className="w-6" src="/instagram-logo.png" alt="instagram" /></a>
            <a href="https://github.com/Ojas025" target="_blank"><img className="w-6" src="/github-logo.png" alt="github" /></a>
            <a href="https://linkedin.com/in/deshpande-ojas" target="_blank"><img className="w-6" src="/linkedin-logo.png" alt="linkedin" /></a>
        </div>
    </div>
  )
}
