import useSWR from 'swr'
import Image from 'next/image'
import styles from '../styles/Photos.module.css'

const fetcher = url => fetch(url).then(r => r.json())

const Photos = () => {
  const { data:images, error } = useSWR('https://api.unsplash.com/photos/?client_id=6e3d67959eeac5dab05fa206efe70451833773fc73bed3398e4e297fcab7070b', fetcher)
  return ( 
    <>
      {error && (
        <div>failed to  due to {error}</div>
      )}

      {!images && (
        <div>Loading</div>
      )}

      {images && (
        <div className={styles['photo-grid']}>
          {images.map(image => (
            <Image 
              src={image.urls.regular} 
              layout="responsive"
              height={200}
              width={200}
              key={image.id} 
            />
          ))}
        </div>
      )}
    </>
  )
}
 
export default Photos;