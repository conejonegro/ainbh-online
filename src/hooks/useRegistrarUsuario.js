// hooks/useRegistrarUsuario.js
"use client";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { app } from "@/lib/firebase";

export default function useRegistrarUsuario() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.email) return;

    const registrarUsuario = async () => {
      try {
        const db = getFirestore(app);
        const userRef = doc(db, "users", session.user.email);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
          await setDoc(userRef, {
            email: session.user.email,
            nombre: session.user.name || "",
            cursosPermitidos: [],
          });
          console.log("✅ Usuario registrado en Firestore");
        }
      } catch (error) {
        console.error("❌ Error registrando usuario:", error);
      }
    };

    registrarUsuario();
  }, [session, status]);
}
