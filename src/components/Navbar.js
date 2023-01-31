import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Milton Tarsian Garcia Payero
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Mis Proyectos
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades o tecnologias
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Preparación <br>
            </br>
          </a>

           
          <a href="https://miltongarciaingles.netlify.app">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 192.756 192.756"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" fill-opacity="0" d="M0 0h192.756v192.756H0V0z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M184.252 149.619V43.135H8.504v106.484h175.748z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#33348e" d="M184.252 149.619V43.135H8.504v106.484h175.748z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M116.75 149.619v-37.152h67.502v-32.18H116.75V43.135H75.058v37.152H8.504v32.18h66.554v37.152h41.692z"/><path fill="#fff" d="M29.907 43.135l154.345 93.521v12.965H163.23L8.504 55.869V43.135h21.403z"/><path fill="#fff" d="M162.85 43.135L8.504 136.656v12.965h21.023l154.725-93.752V43.135H162.85z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#cc2229" d="M184.252 86.106H109.09V43.135H83.738v42.971H8.504v20.542h75.234v42.971h25.352v-42.971h75.162V86.106z"/><path fill="#cc2229" d="M8.584 43.135l61.055 37.152H55.936L8.504 51.424v-8.289h.08zM8.504 149.434v.187h13.394l53.16-32.348v-4.806h-5.805L8.504 149.434zM184.252 149.621v-7.762l-48.303-29.392h-13.703l61.059 37.154h.947zM169.764 43.135l-53.014 32.26v4.892h5.662l61.055-37.152h-13.703z"/></svg>
       
          
          </a><a href="https://miltongarciaingles.netlify.app">ENGLISH</a>

        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Redes Sociales
          
        </a>


        

      </div>
    </header>
  );
}
