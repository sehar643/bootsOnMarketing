import React from 'react'
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Queto = () => {
     // Use the useForm hook and destructure the methods you need
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Define the submit handler function
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
    <div
      className="relative w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('src/assets/images/homepagebanner.jpg')`, // Ensure this path is correct
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Text content with responsive positioning */}
      <div className="relative pt-16 z-10 text-white flex flex-col lg:items-start text-center lg:text-left">
        <p className="text-2xl font-semibold text-white lg:text-gray-300">WE'D LOVE</p>
        <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold">
          <span className="text-cyan-500">TO HEAR ABOUT</span> <br />
          <span className="text-white">YOUR PROJECT</span>
        </h1>
      </div>
    </div>


    <div className='pt-5'>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-4 border shadow-xl rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='font-bold'>Your Name</label>
          <input
            type="text"
            {...register("firstName", { required: true })}
            placeholder="Your Name"
            className="w-full border rounded p-2"
          />
          {errors.firstName && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className='font-bold'>Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: true })}
            placeholder="Last Name"
            className="w-full border rounded p-2"
          />
          {errors.lastName && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className='font-bold'>Your Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="w-full border rounded p-2"
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className='font-bold'>Company</label>
          <input
            type="text"
            {...register("company")}
            placeholder="Company"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className='font-bold'>Phone</label>
          <PhoneInput
            country={'us'}
            value=""
            onChange={(phone) => setValue("phone", phone)}
            inputClass="w-full border rounded p-2"
          />
          {errors.phone && <span className="text-red-500">This field is required</span>}
        </div>
      </div>

      <div className="mt-4">
        <label className='font-bold'>Type of Business:</label>
        <div className="grid grid-cols-3 gap-2">
          {["Technology", "Food", "Fashion", "Finance", "Social", "Medicine", "Legal", "Religious", "Political", "Others"].map((type) => (
            <div key={type}>
              <input type="radio" {...register("businessType")} value={type} />
              <label className="ml-2">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className='font-bold'>Type of Website You Need:</label>
        <div className="grid grid-cols-3 gap-2">
          {["Social Media", "Personal", "Blog / NGO", "Medical", "Food / Restaurant", "Local Business", "Educational", "Sports", "Law Firm", "Medium Business", "Others"].map((type) => (
            <div key={type}>
              <input type="checkbox" {...register("websiteType")} value={type} />
              <label className="ml-2">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className='font-bold'>Additional Services:</label>
        <div className="grid grid-cols-3 gap-2">
          {["Logo Design", "Mobile Optimized", "Video", "SEO / SMM", "Analytics", "Page Speed", "Landing Page Design", "Advertisement Management", "Others"].map((service) => (
            <div key={service}>
              <input type="checkbox" {...register("additionalServices")} value={service} />
              <label className="ml-2">{service}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className='font-bold'>Notes</label>
        <textarea
          {...register("notes")}
          placeholder="Your notes..."
          className="w-full border rounded p-2"
        />
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
    </div>
{/* section three  */}
<div>
  <section className="flex justify-center items-center min-h-screen bg-white">
    <div className="max-w-4xl w-full px-8">
      <div className="mb-8">
        <h2 className="text-lg mb-5 font-bold">CONTACT US</h2>
        <h1 className="text-5xl font-bold leading-tight">
          DROP US A MESSAGE, <span className="text-[#00BFFF]">AND WE’LL BE RIGHT IN TOUCH</span>
        </h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-8 mb-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
          <i className="fab fa-whatsapp text-2xl font-bold text-green-500"></i>
            <p>+971 58 231 1276</p>
          </div>
          <div className="flex items-center gap-4">
          <i className="fas fa-envelope text-2xl "></i>
            <p>contact@boostonmarketing.com</p>
          </div>
          <div className="flex items-center gap-4">
          <i className="fab fa-facebook text-2xl text-blue-600"></i>
          <i className="fab fa-instagram font-bold text-2xl text-pink-500"></i>
          <i className="fab fa-linkedin text-2xl text-blue-700"></i>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 max-w-xs lg:ml-52">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="border border-black p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="border border-black p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <PhoneInput
              country={'us'}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false
              }}
              onChange={(value) => setValue("phone", value)}
              containerClass="border border-black w-full"
            //   inputClass="w-full p-2"
            //   className="border border-black p-2 w-full"
            />
            {errors.phone && <span className="text-red-500">Phone is required</span>}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              className="border border-black p-2 w-full h-32"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-1 w-full md:w-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Queto
