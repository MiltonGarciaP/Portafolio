import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola , Soy Milton Garcia
            <br className="hidden lg:inline-block" /> Desarrollador de Software 
            <br className="hidden lg:inline-block" /> BackEnd 
            
          </h1>
          <p className="mb-7 leading-relaxed">
          Soy un desarrollador de Software de 20 años que viven Santo Domingo, República Dominicana
            soy tecnologo en Desarrollo de Software en el Instituto Tecnologico de las Americas (ITLA)
            tengo experiencia trabajando 
            con diferentes tecnologías, tengo un mayor desenvolvimiento y dominio con la 
            biblioteca .net de microsoft con el lenguaje de programacion C# (ASP.NET , Windows Forms , Xamarin y Blazor)
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contactame
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mis Proyectos
            </a>
            <a
              href="https://drive.google.com/file/d/1uoOTgOLjz6xFUcVYc0eF-4haelQhEH6K/view?usp=sharing"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Descarga el CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/icono.jpg"
          />
        </div>
      </div>
    </section>
  );
}
