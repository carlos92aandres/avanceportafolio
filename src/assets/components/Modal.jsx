import React from 'react'

const Modal = ({menu}) => {
  return (
    <div>
    <section className={`fixed top-10 right-0  flex justify-center items-center transition-opacity    ${
        menu ? "opacity-100 visible z-20 durarion-200" : "opacity-0 invisible duration-200 "
      }`}>
        <div className='h-[200px] w-screen fixed top-[75px] bottom-0 right-0 left-0 bg-gradient-to-b from-blue-900 to-black'>
           
            <ul className='grid ml-2 font-semibold  my-4 gap-10 text-white'>
                <li className='cursor-pointer hover:tracking-wider duration-200 '>Acerca de mi</li>
                <li className='cursor-pointer hover:tracking-wider duration-200 '> Contactame</li>
                <li className='cursor-pointer hover:tracking-wider duration-200 '>Mis proyectos</li>
            </ul>
        </div>
      </section>

      </div>
  )
}

export default Modal