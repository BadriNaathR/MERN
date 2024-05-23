import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
        <form className="card-body" method="dialog">
        <h3 className="font-bold text-lg">Please Login!</h3>

{/* email */}
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input
    type="email"
    placeholder="email"
    className="input input-bordered"
    
  />
</div>

{/* password */}
<div className="form-control">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input
    type="password"
    placeholder="password"
    className="input input-bordered"
  />
  <label className="label mt-1">
    <a href="#" className="label-text-alt link link-hover">
      Forgot password?
    </a>
  </label>
</div>
<div className="form-control mt-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-orange text-white"
              />
            </div>

            <p className="text-center my-2">
              Donot have an account?{" "}
              
            </p>

            <button 
            htmlFor="my_modal_5"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</button>
          </form>
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-orange hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-orange hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-orange hover:text-white">
            <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
        

  )
}

export default Modal
