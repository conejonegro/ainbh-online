'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from "@/lib/firebase";
import CursoForm from '@/components/curso-form/CursoForm';


export default function AdminPage() {
  const { data: session, status } = useSession();
  console.log("session", session)
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    async function checkAdmin() {
      if (status === 'authenticated' && session?.user?.email) {
        const db = getFirestore(app);
        const userRef = doc(db, 'users', session.user.email);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const role = userSnap.data().role;
          //console.log("role", role)
          if (role === 'admin') {
            setIsAdmin(true);
          } else {
            router.push('/');
          }
        } else {
          router.push('/');
        }
      } else if (status === 'unauthenticated') {
        router.push('/api/auth/signin');
      }
    }

    checkAdmin();
  }, [session, status, router]);

  if (isAdmin === null) {
    return <p className="text-center mt-10">Cargando...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl text-black font-bold mb-6">Panel de Administración</h1>
      <p className="text-lg text-black">Bienvenida, maestra. Aquí podrás gestionar tus cursos.</p>
      <CursoForm />
    </div>
  );
}
