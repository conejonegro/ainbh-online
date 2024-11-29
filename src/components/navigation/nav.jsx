import Link from "next/link"
import { useSession } from "next-auth/react";
import PerfilUsuario from "@/app/perfil/page";

export default function Nav(){
   const { data: session, status } = useSession();
   return(
      <nav className="flex justify-evenly p-8">
         <Link href="/"  rel="noopener noreferrer">Home</Link>
         <Link href="/nosotros"  rel="noopener noreferrer">Nosotros</Link>
         <Link href="/cursos"  rel="noopener noreferrer">Cursos</Link>
         <Link href="/contacto"  rel="noopener noreferrer">Contacto</Link>
         {status === "authenticated" ? <Link href="/perfil" rel="noopener noreferrer">Perfil</Link> : 
            <Link href="/login" rel="noopener noreferrer">Login</Link>
         }
         
      </nav>
   )
}