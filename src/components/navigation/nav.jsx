import Link from "next/link"

export default function Nav(){
   return(
      <nav className="flex justify-evenly p-8">
         <Link href="/"  rel="noopener noreferrer">Home</Link>
         <Link href="/nosotros"  rel="noopener noreferrer">Nosotros</Link>
         <Link href="/cursos"  rel="noopener noreferrer">Cursos</Link>
         <Link href="/contacto"  rel="noopener noreferrer">Contacto</Link>
         <Link href="/login" rel="noopener noreferrer">Login</Link>
      </nav>
   )
}