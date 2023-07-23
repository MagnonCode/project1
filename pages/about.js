import React from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image'


const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Hunting Coders</h1>
      <div className={styles.imagewrapper}>
          <Image src="/coder.webp" alt="Image of a coder" height={223.5} width={343} quality={70} priority={true}/>
       </div>
      <p className={styles.about}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dicta neque voluptatibus minima sapiente voluptas accusamus, reiciendis mollitia asperiores nobis, illo dignissimos saepe voluptatum odit fuga non facere provident recusandae debitis iusto consequatur, animi laborum! Libero cumque facilis repudiandae voluptatum dolorum? Voluptates corrupti quam et natus atque, cumque obcaecati provident nostrum impedit enim excepturi magnam dolores perspiciatis, mollitia ad quasi, recusandae aperiam. Suscipit voluptate vero culpa porro aut minus quasi asperiores sit, sequi inventore quisquam quam quaerat repellat! Excepturi nisi sint voluptas nulla quidem vero culpa dolorem distinctio, sapiente obcaecati, nesciunt adipisci, porro architecto similique laborum. Ducimus, quis! Maiores illo ex vero culpa nisi corporis nobis aliquid molestiae, ea sed dolor, harum tempore quibusdam quae impedit quod voluptatibus fugit eos debitis. Unde, nostrum sint aut natus reprehenderit voluptas corrupti odit alias inventore tempora nesciunt neque hic. Tenetur ducimus odit quasi corrupti fuga doloribus illo! Dicta iure rerum, nihil fuga nostrum harum excepturi autem labore impedit voluptate, dolore ullam illo doloremque temporibus sint quia sunt eaque, blanditiis exercitationem. Ipsa architecto optio velit quibusdam voluptatem, necessitatibus blanditiis vel maxime totam, iste harum nisi corporis dolores asperiores quaerat cumque ratione quia accusamus nemo dolor quis?
      </p>
      <hr className={styles.hr}/>
    </div>
  )
}

export default About