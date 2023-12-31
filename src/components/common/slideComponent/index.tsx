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

    let slideCount = 0
    if (courses.length >= 6) {
        slideCount = 6
    } else {
        slideCount = courses.length
        
    }
  return <>
    <div className={styles.content}>
        <Splide
         options={{
            type:'loop',
            perPage: slideCount,
            perMove: 1,
            width: slideCount * 300,
            pagination: false,
            arrows: courses.length > 6 ? true: false,
            drag: courses.length > 6 ? true: false,
            breakpoints: {
                1890: {
                    perPage: slideCount >= 5 ? 5 : courses.length,
                    width:slideCount >= 5 ? 1500 : courses.length * 300,
                    arrows: courses.length > 5 ? true: false,
                    drag: courses.length > 5 ? true: false,                
                },
                1560: {
                    perPage: slideCount >= 4 ? 4 : courses.length,
                    width:slideCount >= 4 ? 1200 : courses.length * 300,
                    arrows: courses.length > 4 ? true: false,
                    drag: courses.length > 4 ? true: false,        
                },
                1270: {
                    perPage: slideCount >= 3 ? 3 : courses.length,
                    width:slideCount >= 3 ? 900 : courses.length * 300,
                    arrows: courses.length > 3 ? true: false,
                    drag: courses.length > 3 ? true: false,
                },
                990: {
                    perPage: slideCount >= 2 ? 2 : courses.length,
                    width: slideCount >= 3 ? 600 : courses.length * 300,
                    arrows: courses.length > 2 ? true: false,
                    drag: courses.length > 2 ? true: false,
                },
                670: {
                    perPage: 1,
                    width: 300,
                    arrows: courses.length > 1 ? true: false,
                    drag: courses.length > 1 ? true: false,
                },
                365: {
                    width: 250
                }
            }
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
