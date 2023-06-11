import React from 'react'

//REACT-ICONS
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Carousel = () => {
    const imagenesCarousel =[
        {imgUrl:"https://st2.depositphotos.com/3378121/5193/i/450/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg", mainText:"Texto de prueba 1", buttonLink:""},
        {imgUrl:"https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg", mainText:"Texto de prueba 2", buttonLink:""},
        {imgUrl:"https://cdn.colombia.com/sdi/2020/12/03/como-hacer-perro-aprenda-nombre-875397-1.jpg", mainText:"Texto de prueba 3", buttonLink:""},
        {imgUrl:"https://images.pexels.com/photos/7324407/pexels-photo-7324407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", mainText:"Texto de prueba 4", buttonLink:""}
    ]


    return (
        <section className='mainCarousel'>
            <button>
                <MdArrowBackIos/>
            </button>
            <div
                style={{backgroundImage:`url(${imagenesCarousel[0].imgUrl})`}} 
                className='imagesContainer'>
            </div>
            {imagenesCarousel && imagenesCarousel.length > 0 &&
                imagenesCarousel.map((item, index) => {
                }) 
            }
            <button>
                <MdArrowForwardIos/>
            </button>
        </section>
    )
}

export default Carousel