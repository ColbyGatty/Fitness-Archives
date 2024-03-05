import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> About</h1>
        <p>
        Suspendisse at ultrices sapien. Nunc finibus convallis eros, 
        vitae lobortis lorem tincidunt ac. Sed nec ipsum et nulla aliquam dignissim.
         In hac habitasse platea dictumst. Phasellus eu magna vel tortor posuere facilisis et in ipsum. 
         Sed sodales malesuada nulla, sed vehicula sapien efficitur eu. Etiam ullamcorper sapien a elit auctor, 
         eu congue justo varius. Sed laoreet, ipsum eget cursus pharetra, ex dui pharetra lectus, 
         id hendrerit elit turpis ut eros. Cras nec scelerisque neque. Curabitur sit amet dictum dui. 
         Morbi eget odio ut magna cursus venenatis. Sed vel leo et velit consectetur tristique vel non leo. 
         Nunc eget tortor vel eros tincidunt commodo. Cras vel nibh velit. Nunc ac elit id mauris sollicitudin convallis. 
         \Donec at nisl ac metus interdum pharetra. 
         Maecenas sit amet tristique urna. Nullam sit amet felis ac felis consectetur rhoncus. 
         Integer eleifend orci id lectus bibendum, ac dignissim nisi volutpat. Cras vehicula augue id nisi rhoncus, 
         sit amet rhoncus lectus convallis. Curabitur nec erat felis. Vivamus nec magna ullamcorper, viverra metus id, 
         congue lorem. Suspendisse potenti. Sed scelerisque quam in leo tempor consequat. Curabitur rutrum risus id vestibulum varius. 
         Maecenas et justo vitae elit tincidunt ullamcorper. Integer et tempor ex. Phasellus hendrerit lorem id mauris rhoncus, 
         vitae dictum sapien bibendum. Suspendisse ullamcorper, enim nec varius luctus, enim libero ultricies lectus, 
         in dictum orci arcu ac purus. Sed eget neque eget purus efficitur luctus. Vivamus faucibus semper tortor, 
         a dictum dui fermentum vel. Etiam interdum odio vel luctus fermentum. In hac habitasse platea dictumst.
        </p>
        </div>
      <div className={styles.imgContainer}>
      <Image src="/about.png" alt="" fill/>
        </div>
    </div>
  )
}

export default AboutPage