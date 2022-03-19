import Testimonial1 from '../../assets/images/testimonial1.jpg';
import Testimonial2 from '../../assets/images/testimonial2.jpg';
import Doctor1 from '../../assets/images/doctor1.jpg';
import Doctor2 from '../../assets/images/doctor2.jpg';

export const Testimonials = [
    {
        name: 'testimonials.testimonial1.name',
        description: 'testimonials.testimonial1.feedback',
        image: Testimonial1,
        position: 'testimonials.testimonial1.occupation',
    },
    {
      name: 'testimonials.testimonial2.name',
      description: 'testimonials.testimonial2.feedback',
      image: Testimonial2,
      position: 'testimonials.testimonial2.occupation',
    },
]

export const doctorsList = [
    {
      doctorId: 0,
      name: 'doctor1.name',
      qualification: 'M.B.B.S, M.S(General Surgery)',
      position: 'doctor1.designation',
      experience: 'doctor1.years',
      imageURL: Doctor1,
      description: 'doctor1.description'
    },
    {
      doctorId: 1,
      name: 'doctor2.name',
      qualification: 'M.B.B.S',
      position: 'doctor2.designation',
      experience: 'doctor2.years',
      imageURL: Doctor2,
      description: 'doctor2.description'
    },
  ];
