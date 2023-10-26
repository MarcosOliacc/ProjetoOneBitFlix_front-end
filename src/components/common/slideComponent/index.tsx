"use client"
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from '../slideCard';
import { CourseType } from '@/services/courseService';
import styles from './styles.module.scss'

interface props {
    courses: CourseType[]
}

const SlideComponent = function ({courses}: props) {
  return <>
    <div className={styles.content}>
        <Splide
         options={{
            type:'loop',
            perPage: 4,
            perMove: 1,
            width: 1200,
            pagination: false
        }}>
            {courses?.map((course)=>(
                <SplideSlide key = {course.id}>
                    <SlideCard course={course}/>
                </SplideSlide>
            ))}
            
        </Splide>
    </div>
  </>;
};

export default SlideComponent;
