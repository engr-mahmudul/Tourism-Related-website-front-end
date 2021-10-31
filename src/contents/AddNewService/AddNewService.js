import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddNewService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://enigmatic-ridge-45134.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Added Service Successfully');
                    // clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div className='service-main-div'>
            <h3 className='text-center pt-4'>Add a new service</h3>
            <div className='add-service-div'>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Service Name"  {...register("name", { required: true })} />
                    {errors.name && <span className="error">This field is required</span>}

                    <textarea placeholder="Description"  {...register("description", { required: true })} />
                    {errors.description && <span className="error">This field is required</span>}

                    <input placeholder="Service Available Time" defaultValue="" {...register("seasion", { required: true })} />
                    {errors.seasion && <span className="error">This field is required</span>}

                    <input placeholder="Image url" defaultValue="" {...register("img", { required: true })} />
                    {errors.img && <span className="error">This field is required</span>}



                    <input type="submit" value='Add Service' className='bg-success text-white' />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;