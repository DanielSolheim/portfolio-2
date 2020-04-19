import React from 'react';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';


const schema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  email: yup.string().email('Invalid email').required('Email is Required'),
  message: yup.string().min(10, 'Message must be at least 10  characters').required()
});



export default function ContactForm(){
  const{register, handleSubmit, errors} = useForm({
    validationSchema: schema
  });

function onSubmit(data) {
  console.log('data' , data);
}




return(
   <div className="ContactForm">
       <h1> Direct Message </h1>
       <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form--item form--name">
            <input type="text" name="name" placeholder="Name....." ref={register()} />
            {errors.name && <p className="errorMessage"> {errors.name.message} </p>}
          </div>

          <div className="form--item form--email">
            <input type="email" name="email" placeholder="Email....." ref={register()} />
            {errors.emial && <p className="errorMessage"> {errors.email.message} </p>}
          </div>

          <div className="form--item form--name">
            <textarea type="text" name="message" placeholder="Message....." ref={register()} />
            {errors.message && <p className="errorMessage"> {errors.message.message} </p>}
          </div>

           <input className=" form--item form--submit" type="submit" />
       </form>
   </div>


);

}
