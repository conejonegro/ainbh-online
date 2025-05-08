'use client';

import { useState } from 'react';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { app } from '@/lib/firebase';

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export default function CursoForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    description: '',
    duracion: '',
    imageUrl: '',
    maestro: '',
    precio: '',
    slug: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      slug: name === 'nombre' ? slugify(value) : prev.slug,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const db = getFirestore(app);

    try {
      const cursoData = {
        ...formData,
        precio: Number(formData.precio),
        activo: true,
      };

      const docRef = doc(db, 'cursos', formData.slug);
      await setDoc(docRef, cursoData);
      setSuccess('Curso creado correctamente.');
      setFormData({
        nombre: '',
        description: '',
        duracion: '',
        imageUrl: '',
        maestro: '',
        precio: '',
        slug: '',
      });
    } catch (error) {
      console.error('Error al guardar el curso:', error);
      setSuccess('Hubo un error al guardar el curso.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 bg-white p-6 rounded-xl shadow-md border text-black">
      <h2 className="text-2xl font-semibold mb-6 text-center">Nuevo Curso</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Nombre del curso</label>
          <input name="nombre" value={formData.nombre} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Nombre del maestro</label>
          <input name="maestro" value={formData.maestro} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Duración</label>
          <input name="duracion" placeholder="Ej. 3 meses" value={formData.duracion} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Precio (MXN)</label>
          <input name="precio" type="number" value={formData.precio} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Imagen (URL)</label>
          <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Slug del curso</label>
          <input name="slug" value={formData.slug} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Descripción</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded h-28" required />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button type="submit" disabled={loading} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
          {loading ? 'Guardando...' : 'Crear Curso'}
        </button>
      </div>

      {success && <p className="text-sm text-center text-green-700 mt-4">{success}</p>}
    </form>
  );
}
