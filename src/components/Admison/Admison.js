import React from 'react';
import { useForm } from 'react-hook-form';

const Admison = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
    
      console.log(watch("example")); // watch input value by passing the name of it
    
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
      
          <input  placeholder=" Your name" {...register("name", { required: true })} /> <br />

          {errors.name && <span className="error">This name field is required</span>} <br />
          <input  placeholder="Your email" {...register("email", { required: true })} /> <br />
          {errors.email && <span className="error">This email field is required</span>} <br />
          <input placeholder="Your Address" {...register("address", { required: true })} /> <br />
          {errors.address && <span className="error">This address field is required</span>} <br />
          <input placeholder=" Your Phone number " {...register("phone", { required: true })} /> <br />
          {errors.phone && <span className="error">This Phone number field is required</span>} <br />
          <input placeholder="Districts" {...register("districts", { required: true })} /> <br />
          {errors.districts && <span className="error">This Districts field  is required</span>} <br />
    
         <button onClick={()=> onSubmit}>Submit</button>
    
          
        </form>
      );
};

export default Admison;